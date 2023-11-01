import React from 'react';
import BusinessTab from '@src/components/Business/BusinessTab';
import Layout from '@src/components/layout';
import Title from '@src/components/Common/Title';

interface IProps extends React.PropsWithChildren {}

const BusinessWrapper = ({ children }: IProps) => {
  return (
    <Layout>
      <Title title={'Business'} />
      <BusinessTab />
      {children}
    </Layout>
  );
};

export default BusinessWrapper;
