import React from 'react';

export function TeapotSvg({ color, className = '' }: { color: string, className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      style={{ color }}
    >
      <path d="M7 19c-2 0-3-1-3-3s1-3 3-3" />
      <path d="M17 19c2 0 3-1 3-3s-1-3-3-3" />
      <path d="M12 4v4" />
      <path d="M8 4h8" />
      <path d="M15 8c2.5 0 5 1.5 5 4v2c0 2.5-2.5 5-5 5H9c-2.5 0-5-2.5-5-5v-2c0-2.5 2.5-4 5-4z" />
      <path d="M9 19v2" />
      <path d="M15 19v2" />
    </svg>
  );
}
