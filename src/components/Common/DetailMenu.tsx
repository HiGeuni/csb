import React from 'react';
import { MenuType } from '@src/types';
import { Link } from 'gatsby';

interface IProps {
  menus: MenuType[];
}

const Classname =
  'relative leading-10 after:box-border after:bg-accent/[.50] after:w-full after:h-1 after:absolute after:left-0 after:bottom-0';

const DetailMenu = ({ menus }: IProps) => {
  return (
    <div className='flex justify-center  gap-x-8 xs:gap-x-12 md:gap-x-20 md:mx-8 p-8 h-20 items-center text-accent text-md md:text-lg font-bold'>
      {menus.map((menu) => {
        return (
          <Link
            key={menu.title}
            to={menu.to}
            getProps={({
              isCurrent,
              location,
            }: {
              isCurrent: boolean;
              location: {
                pathname: string;
              };
            }) => {
              let additionalClass = '';
              if (menu.to === '/help/notice' && location.pathname.includes('/help/notice')) {
                additionalClass = ' after:scale-x-100 ';
              } else {
                additionalClass = isCurrent
                  ? ' after:transition-none '
                  : ' after:scale-x-0 after:hover:transition-all after:hover:ease-in-out after:hover:duration-200 after:hover:scale-100 ';
              }
              return {
                className: Classname + additionalClass,
              };
            }}
          >
            {menu.title}
          </Link>
        );
      })}
    </div>
  );
};

export default DetailMenu;
