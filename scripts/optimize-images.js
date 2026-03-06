import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToProcess = [
  // Hero
  { url: 'https://i.postimg.cc/htFkCBy8/Gemini-Generated-Image-f1mcmyf1mcmyf1mc.png', output: 'hero-bg.webp' },

  // Logos
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/unimed.png', output: 'logos/unimed.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/allianz.png', output: 'logos/allianz.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/amil.png', output: 'logos/amil.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/porto-seguros.png', output: 'logos/porto-seguros.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/bradesco-saude.png', output: 'logos/bradesco-saude.webp' },

  // Unidades Goiás
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-20.jpeg', output: 'units/goias-1-main.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-14.jpeg', output: 'units/goias-1-pool.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-10.jpeg', output: 'units/goias-1-room.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-20.jpeg', output: 'units/goias-2-main.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-8.jpeg', output: 'units/goias-2-garden.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-7.jpeg', output: 'units/goias-2-room.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-22.jpeg', output: 'units/goias-3-main.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-11.jpeg', output: 'units/goias-3-pool.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-3.jpeg', output: 'units/goias-3-room.webp' },

  // Unidades DF
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-4-17.jpeg', output: 'units/df-4-main.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-4-14.jpeg', output: 'units/df-4-pool.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-4-12.jpeg', output: 'units/df-4-room.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-5-3.jpeg', output: 'units/df-5-main.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-5-1.jpeg', output: 'units/df-5-pool.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-5-9.jpeg', output: 'units/df-5-room.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-6-15.jpeg', output: 'units/df-6-main.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-6-6.jpeg', output: 'units/df-6-pool.webp' },
  { url: 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-6-9.jpeg', output: 'units/df-6-room.webp' },

  // Depoimentos
  { url: 'https://i.postimg.cc/RVNBqd8t/Gemini_Generated_Image_e92z6fe92z6fe92z.jpg', output: 'testimonials/testimonial-1.webp' },
  { url: 'https://i.postimg.cc/m2tshjqF/Gemini_Generated_Image_407nx6407nx6407n.jpg', output: 'testimonials/testimonial-2.webp' },
  { url: 'https://i.postimg.cc/Kc9bZw9t/Gemini_Generated_Image_9j55p69j55p69j55.jpg', output: 'testimonials/testimonial-3.webp' },
  { url: 'https://i.postimg.cc/GhHC9KNy/Gemini_Generated_Image_pzh7qapzh7qapzh7.jpg', output: 'testimonials/testimonial-4.webp' },
];

const outputDir = path.resolve(__dirname, '../public/assets/images');

// Ensure directories exist
['', 'logos', 'units', 'testimonials'].forEach(dir => {
  const fullPath = path.join(outputDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function processImages() {
  console.log('Starting image optimization...');
  
  for (const img of imagesToProcess) {
    try {
      console.log(`Processing ${img.output}...`);
      const buffer = await downloadImage(img.url);
      
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, img.output));
        
      console.log(`Saved ${img.output}`);
    } catch (error) {
      console.error(`Error processing ${img.output}:`, error.message);
    }
  }
  
  console.log('Image optimization complete!');
}

processImages();
