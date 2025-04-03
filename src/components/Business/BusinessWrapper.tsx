import React from 'react';
import { businessDummy } from '@src/assets/dummy/businessDummy';
import { BusinessItem } from '@src/components/Business/BusinessItem';
import { Divider } from '@mantine/core';

export const BusinessWrapper = () => {
  return (
    <div>
      <Divider
        size='sm'
        style={{
          marginTop: '2rem',
        }}
      />
      {businessDummy.map((item, index) => (
        <div key={index} className=''>
          <BusinessItem {...item} />
          <Divider size='sm' />
        </div>
      ))}
    </div>
  );
};
