import React from 'react';
import { PaperType } from '@src/types';
import Title from '@src/components/Common/Title';
import { Notification } from '@src/components/Common/Notification';

import Layout from '../../components/layout';

interface DataProps {
  data: {
    allContentfulPapers: {
      nodes: PaperType[];
    };
  };
}
const ProductMain = () => {
  return (
    <Layout>
      <Title title={'제품 소개'} detailTitle='Product Information' />
      <Notification content='Developing' />
    </Layout>
  );
};

export default ProductMain;
