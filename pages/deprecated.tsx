import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleImage } from '../features/posts/components/ArticleImage';
import { Content } from '../features/posts/components/Content';
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
        <Content title={props.meta.title}>
          <MDXRemote {...props.content} components={components}></MDXRemote>
        </Content>
      </main>
    </>
  );
};

export { getStaticPaths } from '../lib/repository/articles/get-static-paths';
export { getStaticProps } from '../lib/repository/articles/get-static-props';
export default Article;
