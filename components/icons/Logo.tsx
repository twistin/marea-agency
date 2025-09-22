import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 70"
    {...props}
  >
    <defs>
      <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#005F6B' }} />
        <stop offset="100%" style={{ stopColor: '#00A7C0' }} />
      </linearGradient>
      <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#00A7C0' }} />
        <stop offset="100%" style={{ stopColor: '#00D9E4' }} />
      </linearGradient>
    </defs>
    <g transform="translate(45, 0)">
      <path d="M0 15 C 20 5, 40 5, 60 15 S 100 25, 120 15" stroke="url(#wave1)" fill="none" strokeWidth="4" strokeLinecap="round" />
      <path d="M5 22 C 25 12, 45 12, 65 22 S 105 32, 125 22" stroke="url(#wave2)" fill="none" strokeWidth="4" strokeLinecap="round" />
      <path d="M10 29 C 30 19, 50 19, 70 29 S 110 39, 130 29" stroke="#C5A14E" fill="none" strokeWidth="4" strokeLinecap="round" />
    </g>
    <text x="0" y="55" fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="700" fill="#00A7C0">
      MAREA
    </text>
    <text x="105" y="55" fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="500" fill="#C5A14E">
      AGENCY
    </text>
  </svg>
);

export default Logo;
