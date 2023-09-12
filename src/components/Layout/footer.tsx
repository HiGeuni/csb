import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <div className='bg-primary text-white h-[300px] md:h-44 px-12 pt-6 relative -translate-y-full'>
      <div className='w-full mb-4 bg-gray-500 md:flex md:justify-between text-sm px-8'>
        <div>
          <StaticImage alt='logo' src='../../images/logo.png' width={50} />
          <div className='text-md font-bold mt-4'>PennBIT (주) 펜빗 생물정보과학원</div>
        </div>
        <div>
          <div className='pt-8 md:pt-0 text-md font-bold mb-4'>CONTACT US</div>
          <div>
            <span className='font-bold'>Address : </span> 11, Seoljuk-ro 315beon-gil, Buk-gu, Gwangju, Republic of Korea
            (61062)
          </div>
          <div>
            <span className='font-bold'>Phone : </span> +82-10-3640-2689
          </div>
          <div>
            <span className='font-bold'>E-mail : </span>hglee602@gmail.com
          </div>
        </div>
      </div>
      <hr />
      <div className='px-8 md:flex justify-end text-sm py-2'>ⓒ PennBIT, All rights reserved</div>
    </div>
  );
};

export default Footer;
