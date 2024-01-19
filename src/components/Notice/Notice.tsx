import React from 'react';
import { Divider } from '@mantine/core';
import { NoticeType } from '@src/types';

export const NoticeTable = ({
  data,
  currentPage,
  numNotices,
}: {
  data: NoticeType[];
  currentPage: number;
  numNotices: number;
}) => {
  const unit = currentPage * 10;
  console.log(unit);
  return (
    <div className='flex flex-col items-center w-full'>
      <table className='w-full mb-4 rounded-full'>
        <thead>
          <tr>
            <td className='p-4 w-1/12 bg-accent text-white'>
              No
              <Divider orientation='vertical' size='lg' />
            </td>
            <td className='p-4 bg-accent text-white'>
              Title
              <Divider orientation='vertical' size='lg' />
            </td>
            <td className='p-4 w-2/12 bg-accent text-white'>Date</td>
          </tr>
        </thead>
        <tbody>
          {data.map((notice, index) => (
            <tr key={index} className='border-b'>
              <td className='p-4'>{numNotices - unit - index} </td>
              <td className='p-4 cursor-pointer'>{notice.title}</td>
              <td className='p-4'>{notice.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
