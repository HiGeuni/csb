import React from 'react';

interface IProps {
  title: string;
  detailTitle?: string;
}

const Title = ({ title, detailTitle }: IProps) => {
  return (
    <div className='flex flex-col items-center '>
      <div className='text-2xl text-text font-bold mb-2'>{title}</div>
      <div className='text-sm text-primary font-bold '>{detailTitle}</div>
    </div>
  );
};

export default Title;
