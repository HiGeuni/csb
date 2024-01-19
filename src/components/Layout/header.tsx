import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

interface navType {
  title: string;
  to: string;
  active?: boolean;
}

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='w-full flex items-center'>
      <div className='container mx-auto flex flex-wrap justify-between items-center p-2 '>
        <nav id='nav' className='w-full bg-blue-700 ' role='navigation'>
          <div className='container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap '>
            <div className='cursor-pointer font-extrabold text-xl hover:text-gray-700 black-to-gray'>
              <Link className='flex items-center gap-x-2' to='/'>
                <StaticImage alt='logo' src='../../images/logo.png' width={80} />
                <div className='block text-accent text-lg font-bold'>PennBIT</div>
              </Link>
            </div>

            <div className='ml-auto md:hidden'>
              <button onClick={() => setOpen(!open)} className='flex items-center px-3 py-2 rounded' type='button'>
                <svg className='h-5 w-5 text-text' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <title>Menu</title>
                  <path fill='currentColor' d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
            </div>
            <div
              id='menu'
              className={`${
                open ? 'h-[280px]' : ''
              } flex justify-center w-full h-0 transition-all ease-out duration-300 md:transition-none md:h-auto md:w-auto md:flex-grow md:flex md:items-center  overflow-hidden`}
            >
              <ul
                id='ulMenu'
                className={`${
                  !open && 'invisible'
                } md:visible flex flex-col items-center duration-300 ease-out sm:transition-none mt-5 mx-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0 md:gap-x-6`}
              >
                <NavItem title='회사소개' to='/introduction' />
                <NavItem title='사업소개' to='/business' />
                <NavItem title='제품소개' to='/product' />
                <NavItem title='홍보센터' to='/news' />
                <NavItem title='고객지원' to='/help' />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

const NavItem = ({ title, to }: navType) => {
  return (
    <li className='text-base text-accent p-2 font-semibold hover:opacity-60 cursor-pointer transition-opacity md:duration-300'>
      <Link
        to={to}
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        {title}
      </Link>
    </li>
  );
};
