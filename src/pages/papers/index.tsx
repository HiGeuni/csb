import React from 'react';
import Layout from '@components/Layout';
import { graphql } from 'gatsby';

interface PaperType {
  paperName: string;
  author: string;
  publish: string;
  slug: string;
}

interface IProps {
  data: {
    contentfulPapers: {
      nodes: PaperType[];
    };
  };
}

function PapersPage({ data }: IProps) {
  const papers = data.contentfulPapers.nodes;
  return (
    <Layout>
      <div>
        {papers.map((paper) => (
          <>
            <h1>{paper.paperName}</h1>
            <h3>{paper.author}</h3>
          </>
        ))}
      </div>
    </Layout>
  );
}

export const data = graphql`
  query {
    allContentfulPapers {
      nodes {
        paperName
        publish
        author
        slug
      }
    }
  }
`;

export default PapersPage;
