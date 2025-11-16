import Link from 'next/link';

const FapexLogo = ({ className }: { className?: string }) => (
  <Link href="/" className={`flex items-center gap-3 ${className}`}>
    <div className="bg-primary rounded-full p-1.5 sm:p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
        <path d="M14 6.2a2.4 2.4 0 0 1-2.3 2.3" />
        <path d="M12.5 4.5 9 8l-2-2" />
        <path d="M14 9.5h3.5l3-3-3-3h-2L9.5 9" />
      </svg>
    </div>
    <span className="text-xl sm:text-2xl font-headline font-bold text-white whitespace-nowrap">
      Fapex Express
    </span>
  </Link>
);

export default FapexLogo;
