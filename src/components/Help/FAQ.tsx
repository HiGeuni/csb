import React from 'react';
import { Accordion } from '@src/components/Help/Accordion';
import { motion } from 'framer-motion';

export const FAQ = () => {
  const [isOpen, setIsOpen] = React.useState<string>('');
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
      {Array.from({ length: 10 }, (_, index) => (
        <Accordion id={index.toString()} expanded={isOpen} setExpanded={setIsOpen} />
      ))}
    </motion.section>
  );
};
