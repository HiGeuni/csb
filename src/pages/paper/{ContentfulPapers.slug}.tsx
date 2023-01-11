import React from 'react';
import Layout from '@components/Layout';
import { Link, graphql } from 'gatsby';
import { Typography } from '@mui/material';

interface PaperType {
  paperName: string;
  author: string;
  publish: string;
  slug: string;
  information: {
    information: string;
  };
}

interface IProps {
  data: {
    contentfulPapers: PaperType;
  };
}

function PaperPage({ data }: IProps) {
  const papers = data.contentfulPapers;
  return (
    <Layout>
      <Link to="/paper">돌아가기</Link>
      <div>
        <h1>{papers.paperName}</h1>
        <h3>{papers.author}</h3>
        <Typography>{papers.information.information}</Typography>
      </div>
    </Layout>
  );
}

export const data = graphql`
  query ($slug: String) {
    contentfulPapers(slug: { eq: $slug }) {
      paperName
      publish
      author
      slug
      information {
        information
      }
    }
  }
`;

export default PaperPage;
