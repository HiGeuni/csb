import React from 'react';
import BusinessList from '@src/components/Business/BusinessList';
import { NoticeType } from '@src/types';
import { graphql } from 'gatsby';
import Layout from '@src/components/layout';
import Title from '@src/components/Common/Title';
import BusinessTab from '@src/components/Business/BusinessTab';

interface IProps {
  data: {
    allContentfulNotices: {
      nodes: NoticeType[];
    };
  };
}

const BusinessMain = ({ data }: IProps) => {
  return (
    <Layout>
      <Title title={'Business'} isSplit={false} />
      <BusinessTab />
      <BusinessList data={data.allContentfulNotices.nodes} />
    </Layout>
  );
};

export default BusinessMain;

export const data = graphql`
  query {
    allContentfulNotices {
      nodes {
        id
        title
        createdAt
        content {
          content
        }
        tag
      }
    }
  }
`;
