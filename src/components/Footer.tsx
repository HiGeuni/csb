import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '0',
        height: '100px',
        width: '100%',
        borderTop: '1px solid',
        maring: 'auto',
      }}
    >
      How much is it?
    </Box>
  );
};

export default Footer;
