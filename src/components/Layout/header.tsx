import React, { useEffect, useState } from 'react';
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

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
    <header className='w-full flex items-center'>
      <div className='container mx-auto flex flex-wrap justify-between items-center p-1 '>
        <nav id='nav' className='w-full bg-blue-700 ' role='navigation'>
          <div className='container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap '>
            <div className='cursor-pointer font-extrabold text-xl hover:text-gray-700 black-to-gray'>
              <Link className='flex items-center gap-x-2' to='/'>
                <StaticImage alt='logo' src='../../images/logo.png' width={80} />
                <div className='block text-accent text-2xl'>PennBIT</div>
              </Link>
            </div>

            <div className='ml-auto md:hidden'>
              <button onClick={() => setOpen(!open)} className='flex items-center px-3 py-2 rounded' type='button'>
                <svg className='h-5 w-5 text-primary' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <title>Menu</title>
                  <path fill='currentColor' d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
            </div>
            <div
              id='menu'
              className={`${
                open ? 'h-56' : ''
              } flex justify-center w-full h-0 transition-all ease-out duration-300 md:transition-none md:h-auto md:w-auto md:flex-grow md:flex md:items-center`}
            >
              <ul
                id='ulMenu'
                className={`${
                  // mobile 조건 추가
                  !open && 'invisible'
                } md:visible flex flex-col items-center duration-300 ease-out sm:transition-none mt-5 mx-4 md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0`}
              >
                <li className='text-lg p-2 font-bold hover:text-[#041444] cursor-pointer '>
                  <Link activeStyle={{ color: '#041444' }} to='/introduction'>
                    introduction
                  </Link>
                </li>
                <li className='text-lg p-2 font-bold hover:text-[#041444] cursor-pointer  '>
                  <Link activeStyle={{ color: '#041444' }} to='/notice'>
                    notice
                  </Link>
                </li>
                <li className='text-lg p-2 font-bold hover:text-[#041444] cursor-pointer '>
                  <Link activeStyle={{ color: '#041444' }} to='/paper'>
                    paper
                  </Link>
                </li>
                <li className='text-lg p-2 font-bold hover:text-[#041444] cursor-pointer '>
                  <Link activeStyle={{ color: '#041444' }} to='/person'>
                    person
                  </Link>
                </li>
                <li className='text-lg p-2 font-bold hover:text-[#041444]cursor-pointer'>
                  <Link activeStyle={{ color: '#041444' }} to='/activity'>
                    activity
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
