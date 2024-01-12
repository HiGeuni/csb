import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { HelpMenus } from '@src/assets/menus';
const Notice = () => {
  return (
    <TempLayout title='Help' menus={HelpMenus}>
      <div className='text-2xl p-2 text-primary font-extrabold'>Notice</div>
    </TempLayout>
  );
};

export default Notice;
