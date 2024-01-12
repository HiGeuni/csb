import React from 'react';
import { HelpMenus } from '@src/assets/menus';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const HelpMain = () => {
  return (
    <TempLayout title='고객 지원' menus={HelpMenus}>
      <div className='text-3xl font-medium capitalize mb-8 text-center'>Contact Me</div>
      <div className='flex justify-center mt-8'>
        <motion.section
          id='contact'
          className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className='text-primary -mt-6'>
            Please contact me directly at{' '}
            <a className='underline text-accent' href='malito:example@gmail.com'>
              pennbit.korea@gmail.com
            </a>{' '}
            or through this form.
          </p>
          <form className='mt-10 flex flex-col'>
            <input
              className='h-14 px-4 rounded-lg borderBlack'
              name='senderEmail'
              type='email'
              required
              maxLength={500}
              placeholder='Your email'
            />
            <textarea
              className='h-52 my-3 rounded-lg borderBlack p-4'
              name='message'
              required
              maxLength={500}
              placeholder='Your message'
            />
            <div className='w-full flex justify-end mt-4'>
              <button
                className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-accent text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'
                type='submit'
              >
                Submit{' '}
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
              </button>
            </div>
          </form>
        </motion.section>
      </div>
    </TempLayout>
  );
};

export default HelpMain;
