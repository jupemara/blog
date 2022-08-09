import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { ArticleContent } from '../features/posts/components/Content';
import { MDX } from '../lib/mdx';
import { getAllPosts } from '../lib/posts';
import { Header } from '../features/header';
import Head from 'next/head';

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;
type P = {
  id: string;
};

const Post: NextPage<PostProps> = (props: PostProps) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ed1c23" />
      </Head>
      <Header></Header>
      <main>
        <ArticleContent title={props.meta.title}>
          <MDX dir={props.dir} mdx={props.mdx}></MDX>
        </ArticleContent>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<P> = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((v) => {
      return {
        params: {
          id: v.meta.slug,
        },
      };
    }),
    fallback: false,
  };
};

export function getStaticProps(context: GetStaticPropsContext<P>) {
  const post = getAllPosts().find((v) => {
    return v.meta.slug === context.params?.id;
  });
  if (!post) {
    throw new Error(
      `cloudn't find specified post. slug: "${context.params?.id}"`,
    );
  }
  return {
    props: post,
  };
}

export default Post;
