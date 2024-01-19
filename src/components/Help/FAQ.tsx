import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQType } from '@src/types';
import { Accordion } from '@src/components/Help/Accordion';

export const FAQ = ({ data }: { data: FAQType[] }) => {
  const [isOpen, setIsOpen] = useState('');
  return (
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
      {data.map((item, index) => (
        <Accordion id={index.toString()} expanded={isOpen} setExpanded={setIsOpen} data={item} />
      ))}
    </motion.section>
  );
};
