import React, { FC } from 'react';
// import appleLogo from '@images/icon.png';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Container, styled } from '@mui/material';
import { Link } from 'gatsby';
import { TopArea, BtnArea, StyledLink } from './styles';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
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
    <>
      <TopArea className="Layout">
        <Link to="/">
          <Img
            style={{ maxWidth: '100vw', marginLeft: 0 }}
            className="logo"
            fluid={[data.desktopImage.childImageSharp.fluid]}
          />
        </Link>
        <BtnArea className="btns">
          {menu.map((t) => (
            <Button key={t} variant="text">
              <StyledLink to={`/${t}`} activeStyle={{ fontWeight: 700 }}>
                {t}
              </StyledLink>
            </Button>
          ))}
        </BtnArea>
      </TopArea>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
