import React from 'react';
import Layout from '@src/components/layout';
import Card from '@src/components/introduction/Card';
import Title from '@src/components/Common/Title';
import DetailMenu from '@src/components/Common/DetailMenu';
import { MenuType } from '@src/types';

const menus: MenuType[] = [
  {
    title: '대표소개',
    to: '/introduction/rep',
  },
  {
    title: '조직도',
    to: '/introduction/organization',
  },
  {
    title: '회사 비전',
    to: '/introduction/vision',
  },
];

const IntroductionMain = () => {
  console.log(location);
  return (
    <Layout>
      <Title title={'Introduction'} isSplit={true} />
      <DetailMenu menus={menus} />
      <Card />
    </Layout>
  );
};

export default IntroductionMain;
