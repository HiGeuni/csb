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

const NoticeMain = ({ data }: IProps) => {
  return (
    <NoticeWrapper>
      <NoticeList data={data.allContentfulNotices.nodes} />
    </NoticeWrapper>
  );
};

export default NoticeMain;

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
