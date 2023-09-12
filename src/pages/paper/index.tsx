import React from 'react';
import { graphql } from 'gatsby';
import { PaperType } from '@src/types';
import PaperContainer from '@src/components/Paper/PaperContainer';

import Layout from '../../components/layout';

interface DataProps {
  data: {
    allContentfulPapers: {
      nodes: PaperType[];
    };
  };
}
const PaperMain = ({ data }: DataProps) => {
  return (
    <Layout>
      <PaperContainer data={data.allContentfulPapers.nodes} />
    </Layout>
  );
};

export default PaperMain;

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
