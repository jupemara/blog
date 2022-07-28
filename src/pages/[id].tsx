import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleProps } from '../lib/repository/articles/get-static-props';

const Article: NextPage<ArticleProps> = (props: ArticleProps) => {
  return (
    <main>
      <div>{props.meta.title}</div>
      <div></div>
      <MDXRemote {...props.content}></MDXRemote>
    </main>
  );
};

export { getStaticPaths } from '../lib/repository/articles/get-static-paths';
export { getStaticProps } from '../lib/repository/articles/get-static-props';
export default Article;
