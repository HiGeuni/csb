import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import Philosophys from '@src/components/introduction/vision/philosophies';
import { IntroMenus } from '@src/assets/menus';

const Vision = () => {
  return (
    <TempLayout title='회사 소개' detailTitle='Introduction' menus={IntroMenus}>
      {/*<div className='text-2xl p-2 text-primary font-extrabold'>Vision</div>*/}
      <Philosophys />
    </TempLayout>
  );
};

export default Vision;
