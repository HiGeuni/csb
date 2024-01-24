import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <div className='bg-static8 text-text h-[340px] md:h-52 px-12 pt-6 relative -translate-y-full'>
      <div className='w-full mb-4 bg-gray-500 md:flex md:justify-between text-sm md:px-8'>
        <div className='w-fit max-w-fit min-w-fit'>
          <StaticImage alt='logo' src='../../images/logo.png' width={50} />
          <div className='text-sm font-semibold mt-4'>PennBIT Co.,Ltd.</div>
          <div className='text-sm font-semibold mt-2'>(주) 펜빗 생물정보과학기술원</div>
        </div>
        <div className='text-xs w-auto sm:w-[400px] leading-loose'>
          <div className='pt-8 md:pt-0 opacity-50 text-sm font-bold mb-4'>CONTACT US</div>
          <div className='flex flex-wrap'>
            <span className='opacity-95 font-bold mr-1'>Address : </span>
            <div className='opacity-70'>Gwangju, Republic of Korea</div>
          </div>
          <div className='flex'>
            <span className='opacity-95 font-bold mr-1'>Phone : </span>
            <div className='opacity-70'> 010-3640-2689</div>
          </div>
          <div className='flex'>
            <span className='opacity-95 font-bold mr-1'>Fax :</span>
            <div className='opacity-70'>062-412-2589</div>
          </div>
          <div className='flex'>
            <span className='opacity-95 font-bold mr-1'>E-mail : </span>
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
