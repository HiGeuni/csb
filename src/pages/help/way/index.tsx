import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { HelpMenus } from '@src/assets/menus';
import LocationMap from '@src/components/Help/LocationMap';
import { motion } from 'framer-motion';

const Notice = () => {
  return (
    <TempLayout title='고객 지원' detailTitle='Help' menus={HelpMenus}>
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
        {/*<div className='text-2xl p-2 text-primary font-extrabold'>오시는 길</div>*/}
        <div className=' mt-10 md:flex md:justify-center md:gap-x-12'>
          <div className=' w-[90%] ring-1 ring-gray rounded-md p-4 flex flex-col items-center my-4 mx-auto md:m-0 md:w-2/5 '>
            <div className='text-lg font-bold'>Address</div>
            <div>11, Seoljuk-ro 315beon-gil, Buk-gu, Gwangju, Republic of Korea (61062)</div>
          </div>
          <div className='w-[90%] ring-1 ring-gray rounded-md p-4 flex flex-col items-center my-4 mx-auto md:m-0 md:w-2/5 '>
            <div className='text-lg font-bold'>E-mail</div>
            <div>pennbit.korea@gmail.com</div>
          </div>
        </div>
        <div className='flex justify-center items-center w-full h-[500px] mt-10'>
          <div className='w-4/5 h-[500px]'>
            <LocationMap />
          </div>
        </div>
      </motion.section>
    </TempLayout>
  );
};

export default Notice;
