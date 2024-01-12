import React, { useState } from 'react';
import { MenuType } from '@src/types';
import { Link } from 'gatsby';

interface IProps {
  menus: MenuType[];
}

const DetailMenu = ({ menus }: IProps) => {
  const [isActive, setIsActive] = useState<string>('');

  return (
    <div className='flex justify-center gap-x-20 mx-8 p-8 h-20 items-center text-accent text-lg font-bold'>
      {menus.map((menu) => {
        return (
          <Link
            key={menu.title}
            to={menu.to}
            getProps={({ isCurrent }) => {
              if (isCurrent) {
                setIsActive(menu.title);
              }
              return '';
            }}
            className={`
              ${
                isActive === menu.title
                  ? 'after:transition-none '
                  : 'after:scale-x-0 after:hover:transition-all after:hover:ease-in-out after:hover:duration-200 after:hover:scale-100 '
              }
              relative leading-10 after:box-border after:bg-accent/[.50] after:w-full after:h-1 after:absolute after:left-0 after:bottom-0
            `}
          >
            {menu.title}
          </Link>
        );
      })}
    </div>
  );
};

export default DetailMenu;
