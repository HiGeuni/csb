import React from 'react';
import { NoticeType } from '@src/types';
import BusinessItem from '@src/components/Business/BusinessItem';

interface IProps {
  data: NoticeType[];
}

const BusinessList = ({ data }: IProps) => {
  return (
    <div className='flex-col items-center px-8 py-4 justify-center'>
      {data.map((notice) => (
        <BusinessItem notice={notice} />
      ))}
    </div>
  );
};

export default BusinessList;
