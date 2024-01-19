import React from 'react';
import { Divider, Pagination } from '@mantine/core';
import { NoticeType } from '@src/types';

export const NoticeTable = ({ data }: { data: NoticeType[] }) => {
  return (
    <div className='flex flex-col items-center'>
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
              <td className='p-4'>{index + 1} </td>
              <td className='p-4 cursor-pointer'>{notice.title}</td>
              <td className='p-4'>{notice.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* TODO : 연동하기*/}
      <Pagination total={10} color='rgba(5, 23, 78, 1)' className='' />
    </div>
  );
};
