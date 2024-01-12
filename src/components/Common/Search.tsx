import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Divider } from '@mantine/core';

export const Search = () => {
  return (
    <div className='flex items-center gap-3 p-3 w-max border border-secondary rounded-md'>
      <MdSearch />
      <input type='text' className='bg-transparent border-none outline-none' />
      <Divider orientation='vertical' />
      <button className='appearance-none'>검색</button>
    </div>
  );
};
