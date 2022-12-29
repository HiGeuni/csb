import React, { FC } from 'react';
// import appleLogo from '@images/icon.png';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Container, styled } from '@mui/material';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
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
        <Img className="logo" fluid={[data.desktopImage.childImageSharp.fluid]} />
        <BtnArea className="btns">
          <Button variant="text"> Introduction</Button>
          <Button variant="text"> news</Button>
          <Button variant="text"> paper</Button>
        </BtnArea>
      </TopArea>
      {children}
    </>
  );
};

export default Layout;

const TopArea = styled(Container)`
  display: flex;
  align-content: space-between;
  align-items: flex-start;
  padding: 30px 50px;
  .logo {
    min-height: 30px;
    min-width: 30px;
  }
`;
const BtnArea = styled('div')`
  margin-left: auto;
`;
