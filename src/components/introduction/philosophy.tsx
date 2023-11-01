import React from 'react';

const Philosophy = () => {
  return (
    <>
      <ul>
        <ListComponent content='지금 바로 여기에 행복이 있는 기업' delay='300' />
        <ListComponent
          content='인류와 자연 환경의 조화로움 속에 공생/공유의 아름다움으로 더 나은 미래를 추구하는 기업'
          delay='300'
        />
        <ListComponent content='다양한 연구자 요구에 200% 이상의 만족을 이끌어내는 기업' delay='300' />
        <ListComponent content='자신의 가치가 존중 받고, 그 가치가 행복을 가져다 주는 기업' delay='300' />
        <ListComponent content='새로운 도전에 주저함 없이 실패/좌절의 발돋움으로 더욱 전진해 나가는 기업' delay='300' />
        <ListComponent
          content='최고의 연구자들이 모여 최고의 연구를 하고, 최고의 연구를 통해 최고의 제품을 만들어내는 기업'
          delay='300'
        />
      </ul>
    </>
  );
};

export default Philosophy;

const ListComponent = ({ content, delay }: { content: string; delay: string }) => {
  return (
    <li className={`animate-move-up opacity-0`} style={{ animationDelay: `${delay}ms` }}>
      {content}
    </li>
  );
};
