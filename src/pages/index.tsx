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
          Apple Inc. is an American multinational technology company headquartered in Cupertino,
          California, United States. Apple is the largest technology company by revenue (totaling
          US$365.8 billion in 2021) and, as of June 2022, is the world's biggest company by market
          capitalization, the fourth-largest personal computer vendor by unit sales and
          second-largest mobile phone manufacturer. It is one of the Big Five American information
          technology companies, alongside Alphabet, Amazon, Meta, and Microsoft. Apple was founded
          as Apple Computer Company on April 1, 1976, by Steve Wozniak, Steve Jobs and Ronald Wayne
          to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and
          Wozniak as Apple Computer, Inc. in 1977 and the company's next computer, the Apple II,
          became a best seller and one of the first mass-produced microcomputers. Apple went public
          in 1980 to instant financial success. The company developed computers featuring innovative
          graphical user interfaces, including the 1984 original Macintosh, announced that year in a
          critically acclaimed advertisement. By 1985, the high cost of its products and power
          struggles between executives caused problems. Wozniak stepped back from Apple amicably and
          pursued other ventures, while Jobs resigned bitterly and founded NeXT, taking some Apple
          employees with him. As the market for personal computers expanded and evolved throughout
          the 1990s, Apple lost considerable market share to the lower-priced duopoly of the
          Microsoft Windows operating system on Intel-powered PC clones (also known as "Wintel"). In
          1997, weeks away from bankruptcy, the company bought NeXT to resolve Apple's unsuccessful
          operating system strategy and entice Jobs back to the company. Over the next decade, Jobs
          guided Apple back to profitability through a number of tactics including introducing the
          iMac, iPod, iPhone and iPad to critical acclaim, launching "Think different" and other
          memorable advertising campaigns, opening the Apple Store retail chain, and acquiring
          numerous companies to broaden the company's product portfolio. When Jobs resigned in 2011
          for health reasons, and died two months later, he was succeeded as CEO by Tim Cook. Apple
          became the first publicly traded U.S. company to be valued at over $1 trillion in August
          2018, then $2 trillion in August 2020, and most recently $3 trillion in January 2022. The
          company receives criticism regarding the labor practices of its contractors, its
          environmental practices, and its business ethics, including anti-competitive practices and
          materials sourcing. Nevertheless, the company has a large following and enjoys a high
          level of brand loyalty. It is ranked as one of the world's most valuable brands.
        </div>
      </Container>
      <Divider />
    </Layout>
  );
};

export default index;
