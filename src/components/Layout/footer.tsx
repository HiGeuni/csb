import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <div className='bg-gray px-12 pt-6 '>
      <div className='w-full mb-4 bg-gray-500 md:flex md:justify-between text-sm px-8'>
        <div>
          <StaticImage alt='logo' src='../../images/logo_monochrome.png' width={50} />
          <div className='text-md font-bold mt-4'>PennBIT (주) 펜빗 생물정보과학원</div>
        </div>
        <div>
          <div className='text-md font-bold mb-4'>CONTACT US</div>
          <div>
            <span className='font-bold'>Address : </span> 11, Seoljuk-ro 315beon-gil, Buk-gu, Gwangju, Republic of Korea
            (61062)
          </div>
          <div>
            <span className='font-bold'>Phone : </span> +82-10-3640-2689
          </div>
        </div>
      </div>
      <hr />
      <div className='px-8 flex justify-end text-sm py-2'>ⓒ PennBIT, All rights reserved</div>
    </div>
  );
};

export default Footer;
