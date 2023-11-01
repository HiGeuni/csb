import React from 'react';
import { graphql } from 'gatsby';
import { PaperType } from '@src/types';
import ProductContainer from '@src/components/Product/ProductContainer';
import Title from '@src/components/Common/Title';

import Layout from '../../components/layout';

interface DataProps {
  data: {
    allContentfulPapers: {
      nodes: PaperType[];
    };
  };
}
const ProductMain = ({ data }: DataProps) => {
  return (
    <Layout>
      <Title title={'Product'} isSplit={true} />
      <ProductContainer data={data.allContentfulPapers.nodes} />
    </Layout>
  );
};

export default ProductMain;

export const data = graphql`
  query {
    allContentfulPapers {
      nodes {
        paperName
        publish
        author
        slug
        information {
          information
        }
      }
    }
  }
`;
