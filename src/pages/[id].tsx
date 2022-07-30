import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleImage } from '../features/articles/components/ArticleImage';
import { Header } from '../features/header';
import { ArticleProps } from '../lib/repository/articles/get-static-props';

const components = {
  img: ArticleImage,
};

const Article: NextPage<ArticleProps> = (props: ArticleProps) => {
  return (
    <>
      <Header></Header>
      <main>
        <div>{props.meta.title}</div>
        <div></div>
        <MDXRemote {...props.content} components={components}></MDXRemote>
      </main>
    </>
  );
};

export { getStaticPaths } from '../lib/repository/articles/get-static-paths';
export { getStaticProps } from '../lib/repository/articles/get-static-props';
export default Article;
