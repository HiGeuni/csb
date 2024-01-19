import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
export const Philosophy = ({ content, imageUrl }: { content: string; imageUrl: string }) => {
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
        hidden: { opacity: 0, y: 100 },
      }}
      className=''
    >
      <section className='relative bg-gray-100 rounded-lg w-full md:w-[800px] max-w-[42rem]overflow-y-hidden overflow-hidden sm:pr-8 sm:mb-8 last:mb-0 hover:bg-gray-200 transition group-even:pl-8 flex'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[70%] sm:h-[20rem] flex flex-col h-full md:group-even:ml-[18rem] text-accent text-xl font-bold justify-center'>
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
