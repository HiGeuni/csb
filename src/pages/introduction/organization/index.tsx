import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { StaticImage } from 'gatsby-plugin-image';
import { IntroMenus } from '@src/assets/menus';
import { motion } from 'framer-motion';

const Organization = () => {
  return (
    <TempLayout title='회사 소개' detailTitle='Introduction' menus={IntroMenus}>
      <motion.div
        className='flex flex-col items-center justify-center mt-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <StaticImage
          src='../../../images/organization.png'
          className='w-4/5 h-full mb-8'
          style={{ minWidth: '50%' }}
          alt='Organization Chart'
          as='div'
        />
      </motion.div>
    </TempLayout>
  );
};

export default Organization;
