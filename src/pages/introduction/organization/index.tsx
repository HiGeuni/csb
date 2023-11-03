import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { StaticImage } from 'gatsby-plugin-image';
import { IntroMenus } from '@src/assets/menus';

const Organization = () => {
  return (
    <TempLayout title='Introduction' menus={IntroMenus}>
      <div className='flex flex-col items-center justify-center mt-8'>
        <StaticImage
          src='../../../images/organization.png'
          className='w-4/5 h-full mb-8'
          style={{ minWidth: '50%' }}
          alt='Organization Chart'
          as='div'
        />
      </div>
    </TempLayout>
  );
};

export default Organization;
