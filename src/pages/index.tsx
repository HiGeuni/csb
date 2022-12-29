import * as React from 'react';
import { Button, Card, Container } from '@mui/material';
import Layout from '@components/Layout/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
const index = () => {
  return (
    <Layout>
      <Container>
        {/* <img
          style={{ display: 'block', height: 'auto', maxWidth: '100vw' }}
          src="https://i0.wp.com/iammom.co.kr/wp-content/uploads/%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%ED%95%9C-%EB%B0%9C%EC%A0%84.jpg?fit=1000%2C667&ssl=1"
        /> */}
      </Container>
      <h1>This is Index Page</h1>
    </Layout>
  );
};

export default index;
