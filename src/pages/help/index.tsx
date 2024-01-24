import React from 'react';
import { HelpMenus } from '@src/assets/menus';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import LocationMap from '@src/components/Help/LocationMap';
import { FaLocationDot } from 'react-icons/fa6';

const HelpMain = () => {
  return (
    <TempLayout title='고객 지원' detailTitle='Help' menus={HelpMenus}>
      <div className='px-4 mt-4 text-2xl font-medium capitalize mb-2 text-center md:text-3xl md:text-start'>
        Contact Me
      </div>
      <p className='ml-4 text-primary text-center md:text-start'>문의 사항이 있다면 아래의 정보로 연락 주세요.</p>
      <motion.section
        id='contact'
        className='w-full flex-col flex md:flex-row justify-between gap-x-20 items-center px-4 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className='mt-10 md:m-0 flex flex-col md:justify-center md:items-center md:gap-12 w-full md:w-[400px] lg:w-[600px]'>
          <div className='w-full ring-1 ring-gray md:ring-0 rounded-md p-4 flex flex-col gap-4 px-8 md:px-0 items-center md:items-start my-4 mx-auto md:m-0 '>
            <FaLocationDot className='text-2xl text-accent' />
            <div className='text-lg font-bold md:text-xl lg:text-2xl'>Address</div>
            <div>Gwangju, Republic of Korea</div>
          </div>
          <div className='w-full ring-1 ring-gray px-8 md:px-0 md:ring-0 rounded-md p-4 flex flex-col gap-2 items-center md:items-start my-4 mx-auto md:m-0 '>
            <FaEnvelope className='text-2xl text-accent' />
            <div className='text-lg font-bold md:text-xl lg:text-2xl'>E-mail</div>
            <div>pennbit.korea@gmail.com</div>
          </div>
          <div className='w-full ring-1 ring-gray px-8 md:px-0 md:ring-0 rounded-md p-4 flex flex-col gap-2 items-center md:items-start my-4 mx-auto md:m-0 '>
            <FaPhone className='text-2xl text-accent ' />
            <div className='text-lg font-bold md:text-xl lg:text-2xl'>Contact</div>
            <div>Phone : 010-3640-2689</div>
            <div>FAX : 062-412-2589</div>
          </div>
        </div>
        <div className='flex justify-center items-center w-full h-[600px] mt-10'>
          <div className='w-full h-[600px]'>
            <LocationMap />
          </div>
        </div>
      </motion.section>
    </TempLayout>
  );
};

export default HelpMain;
