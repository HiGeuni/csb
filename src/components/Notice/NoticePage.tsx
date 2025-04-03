import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { HelpMenus } from '@src/assets/menus';
import { NoticeTable } from '@src/components/Notice/Notice';
import { Search } from '@src/components/Common/Search';
import { graphql } from 'gatsby';
import { NoticeType } from '@src/types';
import { Pagination } from '@src/components/Notice/Pagination';

type DataType = {
  data: {
    allContentfulNotice: {
      nodes: NoticeType[];
    };
  };
};

export const query = graphql`
  query {
    allContentfulNotice(sort: { createdAt: DESC }, limit: 1000) {
      nodes {
        id
        title
        content {
          id
          content
        }
        updatedAt(formatString: "YYYY-MM-DD")
        createdAt(formatString: "YYYY-MM-DD")
        isFixed
      }
    }
  }
`;

interface iProps extends DataType {
  pageContext: {
    numPages: number;
    currentPage: number;
    numNotices: number;
  };
}

const Notice = ({ data, pageContext }: iProps) => {
  const notices = data.allContentfulNotice.nodes;

  return (
    <TempLayout title='고객 지원' detailTitle='Help' menus={HelpMenus}>
      <section>
        {/*<div className='flex justify-end mb-2'>*/}
        {/*  <Search />*/}
        {/*</div>*/}
        <div className='flex flex-col items-center'>
          <NoticeTable data={notices} numNotices={pageContext.numNotices} currentPage={pageContext.currentPage - 1} />
          <Pagination currentPage={pageContext.currentPage} numPages={pageContext.numPages} />
        </div>
      </section>
    </TempLayout>
  );
};

export default Notice;
