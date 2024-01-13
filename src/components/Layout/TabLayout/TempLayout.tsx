import Layout from '@src/components/layout';
import Title from '@src/components/Common/Title';
import DetailMenu from '@src/components/Common/DetailMenu';
import React from 'react';
import { MenuType } from '@src/types';

interface IProps extends React.PropsWithChildren {
  title: string;
  detailTitle: string;
  menus: MenuType[];
}

const TempLayout = ({ children, title, detailTitle, menus }: IProps) => {
  return (
    <Layout>
      <Title title={title} detailTitle={detailTitle} isSplit={true} />
      <DetailMenu menus={menus} />
      {children}
    </Layout>
  );
};

export default TempLayout;
