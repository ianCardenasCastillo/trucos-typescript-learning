export interface IBlog {
  posts: IPost[];
  category: string;
  ads: boolean;
}

export interface IPost {
  title: string;
  description: string;
  content: string;
  author: IAuthor[];
  tags: string;
}

export interface IAuthor {
  name: string;
  email: string;
}