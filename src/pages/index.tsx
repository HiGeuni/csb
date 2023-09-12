import React from 'react';

import Layout from '../components/layout';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  return (
    <Layout>
      <ImageSlider />
      <div className='container mx-auto p-1 w-full h-fit md:flex'>
        <div className='w-full md:w-1/2 h-fit bg-gray-500 p-4'>
          <div className='text-lg font-bold p-2'>Notice</div>
          <hr />
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
        </div>
        <div className='w-full md:w-1/2 h-fit p-4'>
          <div className='text-lg font-bold p-2'>Notice</div>
          <hr />
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
          <div className='flex justify-between m-2 bg-amber-100'>
            <div>name</div>
            <div>createdAt</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
