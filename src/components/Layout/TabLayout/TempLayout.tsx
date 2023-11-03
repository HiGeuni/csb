import Layout from '@src/components/layout';
import Title from '@src/components/Common/Title';
import DetailMenu from '@src/components/Common/DetailMenu';
import React from 'react';
import { MenuType } from '@src/types';

interface IProps extends React.PropsWithChildren {
  title: string;
  menus: MenuType[];
}

const TempLayout = ({ children, title, menus }: IProps) => {
  return (
    <Layout>
      <Title title={title} isSplit={true} />
      <DetailMenu menus={menus} />
      {children}
    </Layout>
  );
};

export default TempLayout;
