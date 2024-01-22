import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from '@src/components/Common/Image';
export const Philosophy = ({ content, imageUrl, index }: { content: string; imageUrl: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  if (index % 2 === 0)
    return (
      <motion.div
        ref={ref}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <section className='relative w-full flex flex-col md:flex-row items-center justify-center md:justify-between py-12'>
          <div className='md:hidden w-[300px] '>
            <Image src={imageUrl} />
          </div>
          <div className='pt-4 pb-7 px-5 flex flex-col w-fit max-w-[300px] md:max-w-none md:w-[400px] lg:w-[500px] text-accent text-lg md:text-xl lg:text-2xl font-bold justify-center'>
            {content}
          </div>
          <div className='hidden md:block md:w-[400px] lg:w-[600px] '>
            <Image src={imageUrl} />
          </div>
        </section>
      </motion.div>
    );

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className='w-full'
    >
      <section className='relative w-full flex flex-col md:flex-row items-center justify-center md:justify-between py-8'>
        <div className='w-[300px] md:block md:w-[400px] lg:w-[600px] '>
          <Image src={imageUrl} />
        </div>
        <div className='pt-4 pb-7 px-5 flex flex-col w-fit max-w-[300px] md:max-w-none md:w-[400px] lg:w-[500px] text-accent text-lg md:text-xl lg:text-2xl font-bold justify-center'>
          {content}
        </div>
      </section>
    </motion.div>
  );
};
