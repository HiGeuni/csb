import React from 'react';
import { Link } from 'gatsby';
interface menu {
  name: string;
  path: string;
}

const menus: menu[] = [
  { name: 'All', path: '/notice' },
  { name: 'Academy', path: '/notice/academy' },
  { name: 'Recruit', path: '/notice/recruit' },
  { name: 'Etc', path: '/notice/etc' },
];

const NoticeTab = () => {
  return (
    <div className='border-solid border-2 border-black w-full flex justify-between'>
      {menus.map((menu) => (
        <Link
          to={menu.path}
          className='text-center w-full border-solid border-s border-black p-2 text-lg hover:bg-gray cursor-pointer'
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
};

export default NoticeTab;
