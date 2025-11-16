import Image from 'next/image';
import Link from 'next/link';

const FapexLogo = ({ className }: { className?: string }) => (
  <Link href="/" className={`flex items-center gap-2 sm:gap-3 ${className}`}>
    <Image
      src="https://i.imgur.com/tSdY6Rs.png"
      alt="FAPEXpress Logo"
      width={40}
      height={40}
      className="h-9 w-9 sm:h-10 sm:w-10"
    />
    <span className="text-xl sm:text-2xl font-headline font-bold text-white whitespace-nowrap">
      FAPEXpress
    </span>
  </Link>
);

export default FapexLogo;
