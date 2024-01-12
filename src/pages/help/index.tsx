import React from 'react';
import { HelpMenus } from '@src/assets/menus';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';

const HelpMain = () => {
  return (
    <TempLayout title='Help' menus={HelpMenus}>
      <div className='text-2xl p-2 text-primary font-extrabold'>문의 사항</div>
    </TempLayout>
  );
};

export default HelpMain;
