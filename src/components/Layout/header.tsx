import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// interface SiteMetadataQueryData {
//   site: {
//     siteMetadata: {
//       siteURL: string;
//     };
//   };
// }

const Header = () => {
  // const data: SiteMetadataQueryData = useStaticQuery(graphql`
  //   query SiteMetadataQuery {
  //     site {
  //       siteMetadata {
  //         siteURL
  //       }
  //     }
  //   }
  // `);
  //
  // const siteURL = data.site.siteMetadata.siteURL;
  //
  // console.log(siteURL);

  return (
    <div className='w-full h-20 flex justify-center items-center'>
      <div className='w-full flex justify-between items-center p-4'>
        <div className='cursor-pointer font-extrabold text-xl hover:text-gray-700 black-to-gray'>
          <Link className='flex items-center gap-x-2' to='/'>
            <StaticImage alt='logo' src='../../images/logo.png' width={80} />
            <div className='block text-accent text-2xl'>PennBIT</div>
          </Link>
        </div>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className='hidden md:flex justify-between gap-x-4' id='navbar-default'>
          <div className='text-lg font-bold hover:text-[#041444] cursor-pointer text-primary'>
            <Link activeStyle={{ color: '#041444' }} to='/introduction'>
              introduction
            </Link>
          </div>
          <div className='text-lg font-bold hover:text-[#041444] cursor-pointer text-primary'>
            <Link activeStyle={{ color: '#041444' }} to='/notice'>
              notice
            </Link>
          </div>
          <div className='text-lg font-bold hover:text-[#041444] cursor-pointer text-primary'>
            <Link activeStyle={{ color: '#041444' }} to='/paper'>
              paper
            </Link>
          </div>
          <div className='text-lg font-bold hover:text-[#041444] cursor-pointer text-primary'>
            <Link activeStyle={{ color: '#041444' }} to='/person'>
              person
            </Link>
          </div>
          <div className='text-lg font-bold hover:text-[#041444]cursor-pointer text-primary'>
            <Link activeStyle={{ color: '#041444' }} to='/activity'>
              activity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
