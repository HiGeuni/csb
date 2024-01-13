import React from 'react';
import Layout from '@src/components/layout';
import Title from '@src/components/Common/Title';
import { Developing } from '@src/components/Common/Developing';

const BusinessMain = () => {
  return (
    <Layout>
      <Title title={'사업 소개'} detailTitle='Business Information' isSplit={false} />
      <Developing />
    </Layout>
  );
};

export default BusinessMain;
