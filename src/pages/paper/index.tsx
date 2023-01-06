import React from 'react';
import Layout from '@components/Layout';
import { Link, graphql } from 'gatsby';

interface PaperType {
  paperName: string;
  author: string;
  publish: string;
  slug: string;
}

interface IProps {
  data: {
    allContentfulPapers: {
      nodes: PaperType[];
    };
  };
}

function PapersPage({ data }: IProps) {
  const papers = data.allContentfulPapers.nodes;
  return (
    <Layout>
      <h1>Paper List</h1>
      {papers.map((paper) => (
        <div className="paperInfo">
          <h2>
            <Link to={paper.slug}>{paper.paperName}</Link>
          </h2>
          <div className="authorInfo">{paper.author}</div>
          <div>{paper.publish.split('T')[0]}</div>
        </div>
      ))}
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
