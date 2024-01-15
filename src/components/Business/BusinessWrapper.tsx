import React from 'react';
import { businessDummy } from '@src/assets/dummy/businessDummy';
import { BusinessItem } from '@src/components/Business/BusinessItem';
import { motion, useInView } from 'framer-motion';
import { Divider } from '@mantine/core';

export const BusinessWrapper = () => {
  return (
    <div>
      {businessDummy.map((item, index) => (
        <React.Fragment key={index}>
          <BusinessItem {...item} />
          <Divider size='sm' />
        </React.Fragment>
      ))}
    </div>
  );
};
