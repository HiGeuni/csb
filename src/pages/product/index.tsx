import React, { useRef } from 'react';
import Title from '@src/components/Common/Title';

import Layout from '../../components/layout';

const ProductMain = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <Title title={'제품 소개'} detailTitle='Product Information' />

      <article className='flex flex-col divide-y-2 divide-[#e3e3e3]'>
        <section className='py-12'>
          <h2 className='mb-4 text-2xl font-bold text-accent'>NGS 데이터 분석</h2>
          <ul className='pl-6 list-disc'>
            <li>차세대 염기서열분석(NGS) 데이터의 전문적 분석 수행</li>
            <li>실험 설계부터 데이터 분석, 논문 작성을 위한 시각화 자료 제작까지 통합 서비스 제공</li>
            <li>연구자의 연구 질 과정을 지원하는 One-Stop Solution 구현</li>
          </ul>
        </section>

        {/* 전문 분석 분야 섹션 */}
        <section className='py-12'>
          <h2 className='mb-4 text-2xl font-bold text-accent'>전문 분석 분야</h2>
          <ul className='pl-6 list-disc'>
            <li>고DNA(ancient DNA) 분석</li>
            <li>환경 DNA(eDNA) 분석</li>
            <li>질병 관련 의료 데이터 분석</li>
            <li>개인 유전체 분석</li>
            <li>대용량 생물학적 데이터 처리</li>
            <li>5G급 논문을 위한 데이터 혁신 및 시각화 자료 제공</li>
          </ul>
        </section>

        {/* 기술 역량 섹션 */}
        <section className='py-12'>
          <h2 className='mb-4 text-2xl font-bold text-accent'>기술 역량</h2>
          <ul className='pl-6 list-disc'>
            <li>최신 분석 기법과 첨단 기술 활용</li>
            <li>전문가 팀의 체계적인 데이터 분석</li>
            <li>연구 데이터로부터 의미 있는 결과 도출</li>
            <li>고객 맞춤형 분석 서비스 제공</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
};

export default ProductMain;
