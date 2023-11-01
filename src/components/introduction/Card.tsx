import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const IntroductionCard = () => {
  return (
    <div className='block md:flex gap-x-4'>
      <StaticImage
        src='../../images/abc.jpg'
        className=' w-full md:w-1/2'
        style={{ minWidth: '50%' }}
        alt='test image'
        as='div'
      />
      <div className='w-fit text-lg'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};

export default IntroductionCard;
