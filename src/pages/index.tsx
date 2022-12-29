import * as React from 'react';
import { Button, Card, Container } from '@mui/material';
import Layout from '@components/Layout';
import { useTheme } from '@mui/material';
const index = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Container>
        <div>
          Buttons
          <br />
          <Button variant="contained">contained</Button>
          <Button variant="text">text</Button>
          <Button variant="outlined">outlined</Button>
        </div>
        <Card>
          <div style={{ minHeight: '40px' }}>
            <span>Hi</span>
          </div>
        </Card>
      </Container>
    </Layout>
  );
};

export default index;
