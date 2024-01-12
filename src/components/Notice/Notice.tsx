import React from 'react';
import { noticeDummy } from '@src/assets/dummy/noticeDummy';
import { Divider, Pagination } from '@mantine/core';
export const NoticeTable = () => {
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
          {noticeDummy.map((notice, index) => (
            <tr key={index}>
              <td className='p-4'>{notice.id}</td>
              <td className='p-4 cursor-pointer'>{notice.title}</td>
              <td className='p-4'>{notice.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination total={10} color='#05174E' />
    </div>
  );
};
