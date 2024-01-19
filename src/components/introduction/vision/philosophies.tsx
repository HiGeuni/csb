import React from 'react';
import { motion } from 'framer-motion';
import { philosophyData } from '@src/assets/philosophy';
import { Philosophy } from '@src/components/introduction/vision/philosophy';
import { Divider } from '@mantine/core';

const Philosophies = () => {
  return (
    <motion.div className='scroll-mt-28 mb-28'>
      {philosophyData.map((item, index) => (
        <React.Fragment key={index}>
          <Philosophy content={item.content} imageUrl={item.image} />
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Philosophies;
