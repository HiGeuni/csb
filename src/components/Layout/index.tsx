import React, { FC, useCallback, useState } from 'react';
// import appleLogo from '@images/icon.png';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Button, Card, Collapse, Container, ListItem, MenuItem, styled } from '@mui/material';
import { Link } from 'gatsby';
import { TopArea, StyledLink } from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '@components/Footer';
import 'src/css/global.css';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);
  const toggleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);
  const menu: string[] = ['introduction', 'notice', 'paper', 'person', 'activity'];
  // get Logo Usign graphql
  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "apple_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <TopArea className="Layout">
        <Link to="/">
          <Img
            style={{ maxWidth: '100vw', marginLeft: 0 }}
            className="logo"
            fluid={[data.desktopImage.childImageSharp.fluid]}
          />
        </Link>
        <Box
          className="btns"
          sx={{
            ml: 'auto',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
            },
          }}
        >
          {menu.map((t) => (
            <Button key={t} variant="text">
              <StyledLink to={`/${t}`} activeStyle={{ fontSize: '20px', fontWeight: 700 }}>
                {t}
              </StyledLink>
            </Button>
          ))}
        </Box>
        <Button
          sx={{
            ml: 'auto',
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'none',
              lg: 'none',
            },
          }}
          onClick={toggleShow}
        >
          <MenuIcon color="error" />
        </Button>
      </TopArea>
      <Collapse
        in={show}
        sx={{
          display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
          },
        }}
      >
        {menu.map((t) => (
          <MenuItem
            component={Link}
            to={`/${t}`}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              p: '10px',
              border: '0.5px solid',
              ':hover': {
                fontWeight: '600',
              },
            }}
          >
            {t}
          </MenuItem>
        ))}
      </Collapse>
      <Container style={{ paddingBottom: '100px' }}>{children}</Container>
      <Footer />
    </main>
  );
};

export default Layout;
