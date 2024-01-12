import { HelpMenus } from '@src/assets/menus';
import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { Divider } from '@mantine/core';
import { FAQ } from '@src/components/Help/FAQ';

const FAQPage = () => {
  return (
    <TempLayout title='고객 지원' menus={HelpMenus}>
      <Divider size='lg' />
      {Array.from({ length: 10 }, (_, index) => (
        <FAQ key={index} />
      ))}
    </TempLayout>
  );
};

export default FAQPage;
