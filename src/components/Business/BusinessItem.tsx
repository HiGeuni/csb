import React, { useRef } from 'react';
import { BusinessType } from '@src/types';
import { motion } from 'framer-motion';

export const BusinessItem = (data: BusinessType) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className='w-full flex px-4 flex-col justify-center  items-center md:justify-between md:flex-row gap-4 p-8'
    >
      <div className=' sm:hidden w-[200px] h-[200px]  bg-black'>Image</div>
      <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[616px] lg:h-[600px] flex flex-col justify-center items-start'>
        <div className='text-2xl font-bold text-accent mb-4'>{data.name}</div>
        <div>{data.description}</div>
      </div>
      <div className='hidden sm:block md:w-[300px] md:h-[300px] lg:w-[616px] lg:h-[600px] bg-black'>Image</div>
    </motion.div>
  );
};
