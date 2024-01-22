import { MenuType } from '@src/types';

export const HelpMenus: MenuType[] = [
  {
    title: '문의사항',
    to: '/help',
  },
  {
    title: 'FAQ',
    to: '/help/faq',
  },
  {
    title: '공지사항',
    to: '/help/notice',
  },
];

export const IntroMenus: MenuType[] = [
  {
    title: '대표소개',
    to: '/introduction',
  },
  {
    title: '조직도',
    to: '/introduction/organization',
  },
  {
    title: '회사 비전',
    to: '/introduction/vision',
  },
];

export const NewsMenus: MenuType[] = [
  {
    title: '보도 자료',
    to: '/news',
  },
];
