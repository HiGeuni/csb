import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
export const Philosophy = ({ content, imageUrl }: { content: string; imageUrl: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '2 1'],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        y: yProgress,
      }}
      transition={{ type: 'tween', duration: 0.2 }}
      viewport={{
        once: true,
      }}
      className='group mb-3 sm:mb-8 last:mb-0 flex justify-center'
    >
      <section className='relative bg-gray-100 rounded-lg w-[800px] max-w-[42rem] borderBlack overflow-y-hidden overflow-hidden sm:pr-8 sm:mb-8 last:mb-0 hover:bg-gray-200 transition group-even:pl-8 flex'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[70%] sm:h-[20rem] flex flex-col h-full group-even:ml-[18rem] text-accent text-xl font-bold  justify-center'>
          {content}
        </div>
        {/*<StaticImage*/}
        {/*  src='../../../images/1.png'*/}
        {/*  alt='Project I worked on'*/}
        {/*  className='absolute top-0 -right-60 w-[28.25rem] rounded-t-lg shadow-lg group-even:right-[initial] group-even:-left-60 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3  group-even:group-hover:rotate-2 transition '*/}
        {/*/>*/}
      </section>
    </motion.div>
  );
};
