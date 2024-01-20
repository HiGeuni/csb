import React, { useRef } from 'react';
import { BusinessType } from '@src/types';
import { motion, useScroll, useTransform } from 'framer-motion';

// TODO: Framer motion 공부 후 구현

export const BusinessItem = (data: BusinessType) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [0, 1],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
      }}
      viewport={{
        once: true,
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
