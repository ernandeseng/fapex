import type { SVGProps } from 'react';

const BoxTruckIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 17V5h7v12h-7z" />
    <path d="M4 17H2V5h12v12h-2" />
    <path d="M9 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M14 9h4" />
  </svg>
);

export default BoxTruckIcon;
