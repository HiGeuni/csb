import Layout from '@src/components/layout';
import Title from '@src/components/Common/Title';
import DetailMenu from '@src/components/Common/DetailMenu';
import Card from '@src/components/introduction/Card';
import React from 'react';
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

const TempLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <Title title={'Introduction'} isSplit={true} />
      <DetailMenu menus={menus} />
      {children}
    </Layout>
  );
};

export default TempLayout;
