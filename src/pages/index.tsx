import * as React from 'react';
import { Button, Card, Container, Divider } from '@mui/material';
import Layout from '@components/Layout';
import image from '@images/apple.png';

const index = () => {
  return (
    <Layout>
      <Container
        className="imgContainer"
        style={{
          display: 'flex',
          position: 'relative',
          textAlign: 'center',
          maxHeight: '400px',
        }}
      >
        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '50px',
            fontWeight: '600',
          }}
        >
          Think Different
        </div>
        <img
          style={{
            display: 'block',
            // maxHeight: '200px',
            width: '100%',
            overflow: 'hidden',
            objectFit: 'cover',
          }}
          src={image}
          alt="test"
        />
      </Container>
      <Container
        className="Introduction"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '3%',
          paddingBottom: '3%',
        }}
      >
        <h5 style={{ color: 'gray' }}>Introduction</h5>
        <div style={{ fontSize: '20px' }}>
          This is Introduction.This is Introduction.This is Introduction.This is Introduction.This
          is Introduction.This is Introduction.This is Introduction.This is Introduction.This is
          Introduction.This is Introduction.This is Introduction.This is Introduction.
        </div>
      </Container>
      <Divider />
    </Layout>
  );
};

export default index;
