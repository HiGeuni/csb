import React from 'react';

import Footer from './Layout/footer';
import Header from './Layout/header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='w-full h-full relative'>
      <div className='h-auto min-h-full pb-[300px] md:pb-52'>
        <Header />
        <div className='container mx-auto p-6'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
