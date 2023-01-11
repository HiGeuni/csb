import React from 'react';
import { Card, Container, Typography, styled } from '@mui/material';
import { cardType } from '../../../types/card';

const ColoredHr = styled('hr')`
  background-color: #fff;
  border-top: 2px dashed #bbb;
`;

export const CardComponent = ({ title, content, url }: cardType) => {
  return (
    <>
      <ColoredHr />
      <h1>{title}</h1>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '2%',
        }}
      >
        <Container>
          <img style={{ display: 'block', height: 'auto', width: '100%' }} src={url} />
        </Container>
        <Typography>{content}</Typography>
      </Card>
    </>
  );
};
