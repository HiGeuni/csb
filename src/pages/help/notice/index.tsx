import React from 'react';

import { motion } from 'framer-motion';

import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { HelpMenus } from '@src/assets/menus';
import { NoticeTable } from '@src/components/Notice/Notice';
import { Search } from '@src/components/Common/Search';
const Notice = () => {
  return (
    <TempLayout title='고객 지원' menus={HelpMenus}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className='flex justify-end mb-2'>
          <Search />
        </div>
        <NoticeTable />
      </motion.section>
    </TempLayout>
  );
};

export default Notice;
