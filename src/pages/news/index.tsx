import React from 'react';
import NewsWrapper from '@src/components/News/NewsWrapper';
import Title from '@src/components/Common/Title';

import Layout from '../../components/layout';

const NewsMain = () => {
  return (
    <Layout>
      <Title title={'News'} isSplit={true} />
      <NewsWrapper />
    </Layout>
  );
};

export default NewsMain;
