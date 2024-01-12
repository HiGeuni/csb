import React from 'react';
import { motion } from 'framer-motion';
import { philosophyData } from '@src/assets/philosophy';
import { Philosophy } from '@src/components/introduction/vision/philosophy';

const Philosophies = () => {
  return (
    <>
      <motion.div className='scroll-mt-28 mb-28 flex flex-col justify-center'>
        {philosophyData.map((item, index) => (
          <React.Fragment key={index}>
            <Philosophy content={item.content} imageUrl={item.image} />
          </React.Fragment>
        ))}
      </motion.div>
    </>
  );
};

export default Philosophies;

const ListComponent = ({ content, delay }: { content: string; delay: string }) => {
  return (
    <li className={`animate-move-up opacity-0 text-2xl p-2`} style={{ animationDelay: `${delay}ms` }}>
      {content}
    </li>
  );
};
