import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const IntroductionCard = () => {
  return (
    <div className='justify-center block my-2 md:flex gap-x-4 gap-y-4'>
      {/* <StaticImage
        src='../../images/abc.jpg'
        className='w-full md:w-1/2'
        style={{ minWidth: '50%' }}
        alt='test image'
        as='div'
      /> */}
      <div className='leading-loose w-fit max-w-[600px] p-4'>
        <h1 className='mb-6 text-3xl font-bold'>안녕하십니까?</h1>

        <p className='mb-8 text-xl font-semibold'>펜빗 생물정보과학기술원 대표 이현관입니다.</p>

        <p className='mb-6 text-gray-800'>
          저희 <span className='font-semibold'>펜빗 생물정보과학기술원</span>은 차세대 염기서열분석(NGS) 데이터 분석을
          전문으로 하는 생물정보 전문 서비스 기업입니다. 실험 설계 단계부터 데이터 분석, 논문 작성에 필요한 시각화 자료
          제작까지, 연구자 여러분의 연구 전 과정을 함께하는 든든한 파트너가 되고자 합니다.
        </p>
        <p className='mb-6 text-gray-800'>
          저희는{' '}
          <span className='font-medium'>
            고DNA (ancient DNA) 분석, 환경 DNA (environmental DNA) 분석, 의약학 DNA (medical DNA) 분석, 개인 유전체
            (individual DNA) 분석
          </span>{' '}
          등 다양한 분야의 NGS 데이터 분석 서비스를 제공하고 있습니다. 각 분야의 전문가들로 구성된 저희 분석팀은 최신
          분석 기법과 첨단 기술을 활용하여, 고객님의 연구 데이터로부터 가장 의미 있는 결과를 도출해내기 위해 최선을
          다하고 있습니다.
        </p>
        <p className='mb-6 text-gray-800'>
          연구자 여러분의 소중한 데이터가 의미 있는 연구 성과로 이어질 수 있도록, 저희 펜빗 생물정보과학기술원이
          함께하겠습니다.
        </p>
        <p className='mb-6 font-medium text-gray-800'>
          데이터 분석에 대한 고민이 있으시다면 언제든 문의해 주시기 바랍니다.
        </p>
        <p className='mb-10 font-medium text-gray-800'>
          여러분의 성공적 연구를 위해 최선을 다하는 신뢰할 수 있는 파트너가 되겠습니다.
        </p>

        <div className='mt-8 text-right'>
          <p className='text-gray-600'>2025년 새해 아침</p>
          <p className='mt-2 text-xl font-semibold'>이 현 관 대표이사</p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionCard;
