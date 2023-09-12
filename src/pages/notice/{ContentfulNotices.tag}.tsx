import React from 'react';
import NoticeList from '@src/components/Notice/NoticeList';
import { NoticeType } from '@src/types';
import { graphql } from 'gatsby';
import NoticeWrapper from '@src/components/Notice/NoticeWrapper';

interface IProps {
  data: {
    allContentfulNotices: {
      nodes: NoticeType[];
    };
  };
}

const NoticeTag = ({ data }: IProps) => {
  return (
    <NoticeWrapper>
      <NoticeList data={data.allContentfulNotices.nodes} />
    </NoticeWrapper>
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
