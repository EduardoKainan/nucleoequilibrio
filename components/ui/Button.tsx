import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  target,
  rel,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer no-underline";
  
  const variants = {
    primary: "border-transparent text-white bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 shadow-md",
    secondary: "border-transparent text-teal-700 bg-teal-100 hover:bg-teal-200 focus:ring-teal-500",
    outline: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-teal-500",
    ghost: "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target={target} 
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};