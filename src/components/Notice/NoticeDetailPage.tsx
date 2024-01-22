import React from 'react';
import { NoticeType } from '@src/types';
import { FaArrowLeft } from 'react-icons/fa';
import { HelpMenus } from '@src/assets/menus';
import TempLayout from '@src/components/Layout/TabLayout/TempLayout';
import { navigate } from 'gatsby';
const NoticeDetailPage = ({ pageContext }: { pageContext: NoticeType }) => {
  const onClickBack = async () => {
    await navigate(-1);
  };

  return (
    <TempLayout title='고객 지원' detailTitle='Help' menus={HelpMenus}>
      <section className='px-4'>
        <div className='flex items-center cursor-pointer mb-4 md:mb-2 text-[#595959] gap-2' onClick={onClickBack}>
          <FaArrowLeft />
          뒤로 가기
        </div>
        <div className='text-accent text-2xl md:text-3xl lg:text-4xl font-bold mb-6'>{pageContext.title}</div>
        <div className='flex gap-2 items-center text-text mb-6'>
          <div className='w-8 h-8 bg-primary rounded-full'></div>
          <div className='text-accent'>PennBIT</div>
          <div className='text-[#595959]'>/ {pageContext.createdAt}</div>
        </div>
        <div className='leading-loose whitespace-pre'>{pageContext.content.content}</div>
      </section>
    </TempLayout>
  );
};

export default NoticeDetailPage;
