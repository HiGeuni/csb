import React from 'react';

import Footer from './Layout/footer';
import Header from './Layout/header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='w-full h-full relative'>
      <div className='h-auto min-h-full pb-[300px] md:pb-44'>
        <Header />
        <div className='container mx-auto'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
