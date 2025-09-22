import React from 'react';

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.998-.552-1.348l-5.22-5.22a.75.75 0 00-1.06 0l-1.25 1.25a.75.75 0 01-1.06 0l-5.22-5.22a.75.75 0 000-1.06l1.25-1.25a.75.75 0 000-1.06L5.102 3.45A2.25 2.25 0 002.25 3h-1.5A2.25 2.25 0 00-1.5 5.25v.75Z" />
  </svg>
);

export default PhoneIcon;