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
      className='w-full h-[28rem] flex px-4 flex-col justify-center md:justify-start items-center md:flex-row gap-4'
    >
      <div className='w-40 h-40 bg-black'>Image</div>
      <div>
        <div className='text-2xl font-bold text-accent mb-4'>{data.name}</div>
        <div>{data.description}</div>
      </div>
    </motion.div>
  );
};
