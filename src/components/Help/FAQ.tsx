import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Divider } from '@mantine/core';

export const FAQ = () => {
  return (
    <>
      <div className='w-full text-accent p-4 flex justify-between'>
        <div className='flex '>
          <div className='pl-2 pr-4 font-bold'>Q</div>
          <div>Question</div>
        </div>
        <div>
          <FaAngleDown />
        </div>
      </div>
      <Divider size='sm' />
    </>
  );
};
