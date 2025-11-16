import type { SVGProps } from 'react';

const MotorcycleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    <path d="m19 13-1.3-4.3a1 1 0 0 0-1-.7H7.3a1 1 0 0 0-1 .7L5 13" />
    <path d="M14 13.5h1" />
    <path d="M19 13c0 1.5-3 4-7 4s-7-2.5-7-4" />
    <path d="M10 9a2 2 0 1 0-4 0" />
    <path d="M3 6h3" />
    <path d="M4 3h2" />
  </svg>
);

export default MotorcycleIcon;
