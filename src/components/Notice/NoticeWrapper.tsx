import React from 'react';
import NoticeTab from '@src/components/Notice/NoticeTab';
import Layout from '@src/components/layout';

interface IProps extends React.PropsWithChildren {}

const NoticeWrapper = ({ children }: IProps) => {
  return (
    <Layout>
      <div className='w-full px-8 py-4 bg-white'>
        <div className='text-2xl font-bold mb-4 w-full mx-1 flex justify-center'>Notice</div>
        <NoticeTab />
        {children}
      </div>
    </Layout>
  );
};

export default NoticeWrapper;
