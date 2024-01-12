import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import Philosophy from '@src/components/introduction/philosophy';
import { IntroMenus } from '@src/assets/menus';

const Vision = () => {
  return (
    <TempLayout title='Introduction' menus={IntroMenus}>
      <div className='text-2xl p-2 text-primary font-extrabold'>Vision</div>
      <Philosophy />
    </TempLayout>
  );
};

export default Vision;
