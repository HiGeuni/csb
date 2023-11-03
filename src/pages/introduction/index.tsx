import React from 'react';
import Card from '@src/components/introduction/Card';
import { IntroMenus } from '@src/assets/menus';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';

const Rep = () => {
  return (
    <TempLayout title='Introduction' menus={IntroMenus}>
      <Card />
    </TempLayout>
  );
};

export default Rep;
