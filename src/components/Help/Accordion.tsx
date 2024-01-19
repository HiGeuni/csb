import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';
import { Divider } from '@mantine/core';
import { FAQType } from '@src/types';

type AccordionProps = {
  id: string;
  expanded: string;
  setExpanded: (id: string) => void;
  data: FAQType;
};
export const Accordion = ({ id, expanded, setExpanded, data }: AccordionProps) => {
  const isOpen = id === expanded;

  return (
    <>
      <div
        className='relative w-full text-accent p-4 flex justify-between z-10 bg-[#f7f7f8]'
        onClick={() => {
          setExpanded(isOpen ? '' : id);
        }}
      >
        <div className='flex'>
          <div className='pl-2 pr-4 font-bold'>Q</div>
          <div className={isOpen ? 'underline underline-offset-4' : undefined}>{data.question}</div>
        </div>
        <div>
          <FaAngleDown />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              collapsed: {
                opacity: 0,
                height: 0,
              },
              open: {
                opacity: 1,
                height: 'auto',
              },
            }}
            transition={{ duration: 0.4 }}
            className='w-full overflow-hidden'
          >
            <motion.div transition={{ duration: 0.4 }} className=' bg-secondary px-8 py-4  whitespace-pre'>
              {data.answer.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Divider size='sm' color='gray' />
    </>
  );
};
