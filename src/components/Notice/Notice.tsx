import React from 'react';
import { Divider } from '@mantine/core';
import { NoticeType } from '@src/types';
import { Link } from 'gatsby';

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
  return (
    <div className='relative flex flex-col items-center w-full rounded-md'>
      <table className='w-full mb-4 border-separate border-spacing-0.5'>
        <thead>
          <tr>
            <td className='p-4 w-1/12 bg-accent text-white'>No</td>
            <td className='p-4 bg-accent text-white'>Title</td>
            <td className='p-4 w-2/12 bg-accent text-white'>Date</td>
          </tr>
        </thead>
        <tbody>
          {data.map((notice, index) => (
            <tr key={index} className=' border border-black'>
              <td className='p-4'>{numNotices - unit - index}</td>
              <td className='p-4 cursor-pointer hover:font-medium hover:text-accent'>
                <Link to={`/help/notice/detail/${notice.id}`}>{notice.title}</Link>
              </td>
              <td className='p-4'>{notice.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
