import React from 'react';
import Layout from '@src/components/layout';
import Title from '@src/components/Common/Title';
import { BusinessWrapper } from '@src/components/Business/BusinessWrapper';
import { PathInfo } from '@src/components/Common/PathInfo';

const BusinessMain = () => {
  return (
    <Layout>
      <Title title={'사업 소개'} detailTitle='Business Information' />
      <BusinessWrapper />
    </Layout>
  );
};

export default BusinessMain;
