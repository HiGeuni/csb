import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <div className='bg-static8 text-text h-[300px] md:h-48 px-12 pt-6 relative -translate-y-full'>
      <div className='w-full mb-4 bg-gray-500 md:flex md:justify-between text-sm md:px-8'>
        <div>
          <StaticImage alt='logo' src='../../images/logo.png' width={50} />
          <div className='text-sm font-semibold mt-4'>PennBIT (주) 펜빗 생물정보과학기술원</div>
        </div>
        <div className='text-xs leading-loose'>
          <div className='pt-8 md:pt-0 opacity-50 text-sm font-bold mb-4'>CONTACT US</div>
          <div className='flex'>
            <span className='opacity-95 font-bold'>Address : </span>
            <div className='opacity-70'>11, Seoljuk-ro 315beon-gil, Buk-gu, Gwangju, Republic of Korea (61062)</div>
          </div>
          <div className='flex'>
            <span className='opacity-95 font-bold'>Phone :</span>
            <div className='opacity-70'> +82-10-3640-2689</div>
          </div>
          <div className='flex'>
            <span className='opacity-95 font-bold'>E-mail : </span>
            <div className='opacity-70'>pennbit.korea@gmail.com</div>
          </div>
        </div>
      </div>
      <hr className='my-0 opacity-10' />
      <div className='md:px-8 md:flex justify-end text-xs py-2'>Copyright ⓒ 2022 PennBIT, All rights reserved</div>
    </div>
  );
};

export default Footer;
