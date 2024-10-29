import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type MenuItem = {
  title: string;
  price: number;
  description: string;
  slug: string;
  mdxSource: MDXRemoteSerializeResult;
};
