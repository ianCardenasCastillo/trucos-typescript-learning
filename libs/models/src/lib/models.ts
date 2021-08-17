/**
 * Blog que contiene posts
 *
 * @export
 * @interface IBlog
 */
export interface IBlog {
  posts: IPost[];
  category: string;
  ads: boolean;
}

/**
 * Post del blog
 *
 * @export
 * @interface IPost
 */
export interface IPost {
  title: string;
  description: string;
  content: string;
  author: IAuthor[];
  tags: string;
}
/**
 * Autor del Post
 *  * Opcion 1
 *  * Opcion 2
 *
 * @export
 * @interface IAuthor
 */
export interface IAuthor {
  name: string;
  email: string;
}