export interface PaperType {
  paperName: string;
  author: string;
  publish: string;
  slug: string;
  information: {
    information: string;
  };
}

export interface NoticeType {
  id: number;
  title: string;
  content: {
    content: string;
  };
  createdAt: string;
  updatedAt: string;
  fixed: boolean;
}
export interface cardType {
  title: string;
  content: string;
  url: string;
}

export interface MenuType {
  title: string;
  to: string;
}

export interface NewsType {
  title: string;
  content: {
    id: string;
    content: string;
  };
  imgUrl: string;
  newsUrl: string;
  slug: string;
}

export type BusinessType = {
  name: string;
  description: string;
  imageUrl?: string;
};

export type FAQType = {
  question: string;
  answer: {
    id: string;
    answer: string;
  };
};
