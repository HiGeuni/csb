import * as React from 'react';
import { Button, Card, Container, styled } from '@mui/material';
import Layout from '@components/Layout';
import Slider from 'react-slick';
import { graphql } from 'gatsby';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'gatsby-image';

const ImageContainer = styled('div')`
  position: relative;
  Img {
    vertical-align: middle;
  }
  .contined-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
  }
  .link {
    font-size: 20px;
    font-weight: 500;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const index = ({ data }) => {
  return (
    <Layout>
      <Slider {...settings} className="overflow-hidden">
        {data.allFile.edges.map((pic) => (
          <ImageContainer>
            <Img fluid={pic.node.childImageSharp.fluid} />
            <div className="contined-text">
              <h2>{pic.node.childImageSharp.fluid.src.split('/')[4]}</h2>
              <p className="link">The link will be located here.</p>
            </div>
          </ImageContainer>
        ))}
      </Slider>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "bg" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default index;
