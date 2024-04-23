/** @format */

import { Link } from 'react-router-dom';
import MobileNav from './navbar/mobileNav';
import MainNav from './navbar/mainNav';
import { useMediaQuery } from './hooks/useMediaQuery';

export const Header = () => {
  const mediaQuery = useMediaQuery('(min-width: 768px)');
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container flex items-center justify-between mx-auto">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          Food-Order
        </Link>

        {mediaQuery ? <MainNav /> : <MobileNav />}
      </div>
    </div>
  );
};
