import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { HelpMenus } from '@src/assets/menus';
import { NoticeTable } from '@src/components/Notice/Notice';
import { Search } from '@src/components/Common/Search';
const Notice = () => {
  return (
    <TempLayout title='고객 지원' menus={HelpMenus}>
      <div className='flex justify-end mb-2'>
        <Search />
      </div>
      <NoticeTable />
    </TempLayout>
  );
};

export default Notice;
