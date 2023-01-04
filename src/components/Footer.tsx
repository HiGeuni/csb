import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        height: '100px',
        width: '100%',
        bgcolor: 'lightgray',
        marginBottom: 'auto',
      }}
    >
      This is Footer
    </Box>
  );
};

export default Footer;
