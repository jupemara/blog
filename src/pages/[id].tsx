import { NextPage } from 'next';
import { ArticleProps } from '../lib/repository/articles/get-static-props';

const Article: NextPage<ArticleProps> = (props: ArticleProps) => {
  return <div>{props.id}</div>;
};

export { getStaticPaths } from '../lib/repository/articles/get-static-paths';
export { getStaticProps } from '../lib/repository/articles/get-static-props';
export default Article;
