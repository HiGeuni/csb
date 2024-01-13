import React from 'react';
import { FaCircleInfo } from 'react-icons/fa6';

export const Developing = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 mt-20 font-extrabold text-4xl text-primary flex gap-4 items-center'>
        <FaCircleInfo />
        <div>개발 중입니다.</div>
      </div>
    </div>
  );
};
