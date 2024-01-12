import React from 'react';
import { Link } from 'gatsby';
interface menu {
  name: string;
  path: string;
}

const menus: menu[] = [
  { name: 'All', path: '/business' },
  { name: 'Academy', path: '/business/academy' },
  { name: 'Recruit', path: '/business/recruit' },
  { name: 'Etc', path: '/business/etc' },
];

const BusinessTab = () => {
  return (
    <div className='border-solid border-2 border-primary w-full flex justify-between'>
      {menus.map((menu) => (
        <Link
          to={menu.path}
          className='text-center w-full border-solid border-s border-primary p-2 text-lg hover:bg-primary hover:text-white transition-colors ease-in duration-200 cursor-pointer'
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default BusinessTab;
