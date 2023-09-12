import React from 'react';
import { NoticeType } from '@src/types';
import NoticeItem from '@src/components/Notice/NoticeItem';

interface IProps {
  data: NoticeType[];
}

const NoticeList = ({ data }: IProps) => {
  return (
    <div className='flex-col items-center px-8 py-4 justify-center'>
      {data.map((notice) => (
        <NoticeItem notice={notice} />
      ))}
    </div>
  );
};

export default NoticeList;
