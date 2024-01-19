import React from 'react';

import { motion } from 'framer-motion';

import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { HelpMenus } from '@src/assets/menus';
import { NoticeTable } from '@src/components/Notice/Notice';
import { Search } from '@src/components/Common/Search';
import { graphql } from 'gatsby';
import { NoticeType } from '@src/types';

type DataType = {
  data: {
    notices: {
      nodes: NoticeType[];
    };
  };
};

export const query = graphql`
  query {
    notices: allContentfulNotices(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        title
        content {
          id
          content
        }
        updatedAt(formatString: "YYYY-MM-DD")
        createdAt(formatString: "YYYY-MM-DD")
        fixed
      }
    }
  }
`;

const Notice = ({ data }: DataType) => {
  const notices = data.notices.nodes;

  return (
    <TempLayout title='고객 지원' detailTitle='Help' menus={HelpMenus}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className='flex justify-end mb-2'>
          <Search />
        </div>
        <NoticeTable data={notices} />
      </motion.section>
    </TempLayout>
  );
};

export default Notice;
