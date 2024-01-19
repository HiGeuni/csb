import React from 'react';
import { FaCircleInfo } from 'react-icons/fa6';

export const Notification = ({ content }: { content: string }) => {
  return (
    <div className='w-full h-[300px] relative'>
      <div className='absolute left-1/2 -translate-x-1/2 mt-20 font-extrabold text-4xl text-primary flex gap-4 items-center'>
        <FaCircleInfo />
        <div>{content}</div>
      </div>
    </div>
  );
};
