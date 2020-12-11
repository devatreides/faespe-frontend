import Searchbar from '../Searchbar';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 bg-faespe-gray">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/home">
          <img
            src="/images/faespe-logo.svg"
            width="130"
            alt="faespe-logo"
            className="cursor-pointer"
          />
        </Link>
        <Searchbar />
      </div>
    </header>
  );
}
