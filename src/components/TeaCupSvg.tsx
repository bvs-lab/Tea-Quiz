import React from 'react';
import { motion } from 'framer-motion';

export function TeaCupSvg({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Steam wisps */}
      <motion.path
        d="M62 38 Q58 28 62 18 Q66 8 62 0"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{ opacity: [0.2, 0.55, 0.2], y: [-2, -7, -2] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M82 32 Q78 22 82 12 Q86 2 82 -6"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{ opacity: [0.45, 0.15, 0.45], y: [-4, -9, -4] }}
        transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.path
        d="M102 36 Q98 26 102 16 Q106 6 102 -2"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{ opacity: [0.3, 0.6, 0.3], y: [-3, -8, -3] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
      />

      {/* Lid knob */}
      <ellipse cx="82" cy="48" rx="8" ry="4" fill={color} opacity="0.85" />
      <ellipse cx="82" cy="46" rx="5" ry="3" fill={color} opacity="0.5" />

      {/* Lid */}
      <path
        d="M42 58 Q42 50 82 50 Q122 50 118 58 Z"
        fill={color}
        opacity="0.75"
      />
      <path
        d="M42 58 Q42 50 82 50 Q122 50 118 58"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Body */}
      <path
        d="M38 60 Q34 90 36 110 Q38 132 82 134 Q126 132 124 110 Q126 90 122 60 Z"
        fill={color}
        opacity="0.12"
      />
      <path
        d="M38 60 Q34 90 36 110 Q38 132 82 134 Q126 132 124 110 Q126 90 122 60 Z"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
        opacity="0.85"
      />

      {/* Body rim / top edge */}
      <path
        d="M38 60 Q38 58 82 58 Q126 58 122 60"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Spout */}
      <path
        d="M38 78 Q20 72 14 82 Q10 90 20 98 Q28 104 40 98"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />

      {/* Handle */}
      <path
        d="M122 72 Q150 72 150 97 Q150 122 122 118"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Decorative line on body */}
      <path
        d="M48 90 Q82 86 116 90"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
      />

      {/* Floating tea leaf on body */}
      <motion.g
        animate={{ rotate: [0, 10, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: '82px 100px' }}
      >
        <ellipse cx="82" cy="100" rx="10" ry="5" fill={color} opacity="0.35" transform="rotate(-15, 82, 100)" />
        <line x1="74" y1="101" x2="89" y2="98" stroke={color} strokeWidth="1.2" opacity="0.5" />
      </motion.g>

      {/* Base shadow ellipse */}
      <ellipse cx="82" cy="138" rx="44" ry="7" fill={color} opacity="0.08" />
    </svg>
  );
}
