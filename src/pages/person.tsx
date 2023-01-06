import Layout from '@components/Layout';
import React from 'react';
import { Box, Card, styled } from '@mui/material';
import dummy from '../../dummy.json';

const StyledDiv = styled('div')`
  display: flex;
  justify-content: center;
  margin: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  .sized {
    width: 300px;
    height: 300px;
    border: 1px solid;
  }
  .card {
    max-width: 302px;
    min-height: 300px;
    margin-left: 5%;
    margin-top: 5%;
  }
`;

const person = () => {
  return (
    <Layout>
      <StyledDiv>
        {dummy.Person.map((e) => (
          <Card className="card" variant="outlined">
            <div className="sized"></div>
            <h1>This Is {e.name}</h1>
            <h3>{e.major}</h3>
          </Card>
        ))}
      </StyledDiv>
    </Layout>
  );
};

export default person;
