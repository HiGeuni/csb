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
  createdAt: string;
  content: {
    content: string;
  };
  tag: string;
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
  content: string;
  imgUrl: string;
  slug: string;
}

export type BusinessType = {
  name: string;
  description: string;
  imageUrl?: string;
};
