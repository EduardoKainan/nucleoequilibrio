#!/usr/bin/env python3
"""Publish one blog image to the Núcleo Equilíbrio Instagram account."""
from __future__ import annotations

import argparse
import json
import os
import time
from pathlib import Path

import requests

BASE = "https://graph.facebook.com/v22.0"
IG_USER_ID = "17841424570245826"  # @tratamentoesaude


def load_env() -> None:
    env_path = Path("/root/.openclaw/workspace/.env")
    if not env_path.exists():
        return
    for raw in env_path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key, value.strip().strip('"'))


def request(method: str, path: str, **kwargs) -> dict:
    token = os.environ.get("TOKEN_ACESS_API_META") or os.environ.get("META_PAGE_ACCESS_TOKEN")
    if not token:
        raise RuntimeError("Meta token not configured")
    params = kwargs.pop("params", {})
    params["access_token"] = token
    response = requests.request(method, f"{BASE}/{path}", params=params, timeout=90, **kwargs)
    if not response.ok:
        raise RuntimeError(f"Meta API {response.status_code}: {response.text[:800]}")
    return response.json()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--image-url", required=True)
    parser.add_argument("--caption", required=True)
    args = parser.parse_args()
    load_env()

    check = requests.get(args.image_url, timeout=30)
    check.raise_for_status()
    if not check.headers.get("content-type", "").startswith("image/"):
        raise RuntimeError("image URL did not return an image")

    container = request("POST", f"{IG_USER_ID}/media", data={"image_url": args.image_url, "caption": args.caption})
    container_id = container["id"]
    for _ in range(20):
        status = request("GET", container_id, params={"fields": "status_code,status"})
        if status.get("status_code") in {"FINISHED", "READY"} or status.get("status") == "FINISHED":
            break
        time.sleep(3)
    else:
        raise RuntimeError("Instagram media container did not become ready")

    published = request("POST", f"{IG_USER_ID}/media_publish", data={"creation_id": container_id})
    post_id = published["id"]
    verified = request("GET", post_id, params={"fields": "id,permalink,caption,media_type"})
    print(json.dumps(verified, ensure_ascii=False))


if __name__ == "__main__":
    main()
