import React from 'react';
import BusinessList from '@src/components/Business/BusinessList';
import { NoticeType } from '@src/types';
import { graphql } from 'gatsby';
import BusinessWrapper from '@src/components/Business/BusinessWrapper';

interface IProps {
  data: {
    allContentfulNotices: {
      nodes: NoticeType[];
    };
  };
}

const NoticeTag = ({ data }: IProps) => {
  return (
    <BusinessWrapper>
      <BusinessList data={data.allContentfulNotices.nodes} />
    </BusinessWrapper>
  );
};

export default NoticeTag;

export const data = graphql`
  query ($tag: String) {
    allContentfulNotices(filter: { tag: { eq: $tag } }) {
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
