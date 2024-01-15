import React from 'react';

import Footer from './Layout/footer';
import Header from './Layout/header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='w-full h-full relative bg-[#f7f7f8]'>
      <div className='h-auto min-h-full pb-[360px] md:pb-52'>
        <Header />
        <div className='container mx-auto py-6'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
