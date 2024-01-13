import React from 'react';
import { graphql } from 'gatsby';
import { PaperType } from '@src/types';
import ProductContainer from '@src/components/Product/ProductContainer';
import Title from '@src/components/Common/Title';

import Layout from '../../components/layout';
import { Developing } from '@src/components/Common/Developing';

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
      <Title title={'제품 소개'} detailTitle='Product Information' isSplit={true} />
      <Developing />
    </Layout>
  );
};

export default ProductMain;
