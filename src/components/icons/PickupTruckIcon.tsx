import type { SVGProps } from 'react';

const PickupTruckIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 17H2" />
    <path d="M2 12V7.5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 18 7.5V12" />
    <path d="M18 12h4v5" />
    <path d="M15 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M6 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

export default PickupTruckIcon;
