import { HelpMenus } from '@src/assets/menus';
import React from 'react';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { Divider } from '@mantine/core';
import { FAQ } from '@src/components/Help/FAQ';
import { graphql } from 'gatsby';
import { FAQType } from '@src/types';

type DataType = {
  data: {
    faqs: {
      nodes: FAQType[];
    };
  };
};

export const query = graphql`
  query {
    faqs: allContentfulFaq {
      nodes {
        question
        answer {
          id
          answer
        }
      }
    }
  }
`;

export const FAQPage = ({ data }: DataType) => {
  const faqData = data.faqs.nodes;

  return (
    <TempLayout title='고객 지원' detailTitle='Help' menus={HelpMenus}>
      <Divider size='lg' />
      <FAQ data={faqData} />
    </TempLayout>
  );
};

export default FAQPage;
