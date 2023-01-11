import { CardComponent } from '@components/CardComponent';
import Layout from '@components/Layout';
import { Card, Container, Typography, styled } from '@mui/material';
import React from 'react';
import { cardType } from 'types/card';

const data1: cardType[] = [
  {
    title: 'What are the Sustainable Development Goals?',
    content:
      'The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015 as a universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity. The 17 SDGs are  integrated—they recognize that action in one area will affect outcomes in others, and that  development must balance social, economic and environmental sustainability. Countries have committed to prioritize progress for those who are furthest behind. The SDGs are designed to end poverty, hunger, AIDS, and discrimination against women and girls. The creativity, knowhow, technology and financial resources from all of society is necessary to achieve the SDGs in every context.',
    url: 'https://i0.wp.com/iammom.co.kr/wp-content/uploads/%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%ED%95%9C-%EB%B0%9C%EC%A0%84.jpg?fit=1000%2C667&ssl=1',
  },
  {
    title: 'GDSC?',
    content:
      'Google Developer Student Clubs (GDSC) 프로그램은 학생들이 개발/리더십 능력을 키울 수 있도록 지원하는 프로그램입니다. 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한 활동들을 지원합니다. 학생이 성장할 수 있도록 전세계의 학생 Lead들과의 교류 기회, Google의 이벤트 참여, 현업 엔지니어와의 만남 등 다양한 기회를 제공하고 쇼케이스/워크샵을 통해 역량을 높일 수 있도록 돕습니다.',
    url: 'https://developers.google.com/community/gdsc/images/gdsc-social-share.png',
  },
];

const introduction = () => {
  return (
    <Layout>
      {data1.map((data) => (
        <CardComponent title={data.title} content={data.content} url={data.url} />
      ))}
    </Layout>
  );
};

export default introduction;
