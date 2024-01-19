import React from 'react';
import Title from '@src/components/Common/Title';
import { Notification } from '@src/components/Common/Notification';

import Layout from '../components/layout';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  return (
    <Layout>
      <ImageSlider />
      <div className='container mx-auto p-1 w-full h-fit md:flex'>
        <div className='w-full md:w-1/2 h-fit bg-gray-500 p-4'>
          <Title title={'Business'} />
          <Notification content='어떤 컨텐츠가 들어가야 할까요?' />
        </div>
        <div className='w-full md:w-1/2 h-fit p-4'>
          <Title title={'Business'} />
          <Notification content='어떤 컨텐츠가 들어가야 할까요?' />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
