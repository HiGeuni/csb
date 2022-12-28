import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const IndexRoute = ({ data: { site } }: PageProps<DataProps>) => {
  return (
    <Layout>
      <h1> {site.siteMetadata.title}</h1>
    </Layout>
  );
};

export default IndexRoute;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
