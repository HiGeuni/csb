import React from 'react';
import { graphql } from 'gatsby';
import NewsWrapper from '@src/components/News/NewsWrapper';
import Title from '@src/components/Common/Title';
import { NewsType } from '@src/types';
import DetailMenu from '@src/components/Common/DetailMenu';
import { NewsMenus } from '@src/assets/menus';

import Layout from '../../components/layout';

type DataType = {
  data: {
    news: {
      nodes: NewsType[];
    };
  };
};
export const query = graphql`
  query {
    news: allContentfulNews {
      nodes {
        id
        title
        content {
          id
          content
        }
        imgUrl
        newsUrl
      }
    }
  }
`;

const NewsMain = ({ data }: DataType) => {
  const newsData = data.news.nodes;
  return (
    <Layout>
      <Title title={'홍보 센터'} detailTitle='PR-Center' />
      <DetailMenu menus={NewsMenus} />
      <NewsWrapper data={newsData} />
    </Layout>
  );
};

export default NewsMain;
