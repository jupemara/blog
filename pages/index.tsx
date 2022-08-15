import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../features/header';
import { Grid } from '../features/Home/components/Grid';
import { Island } from '../features/Home/components/Island';
import { getAllPosts } from '../lib/posts';

type PostsProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<PostsProps> = ({ posts }: PostsProps) => {
  return (
    <div>
      <Head>
        <title>blog.arashike.com</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ed1c23" />
      </Head>
      <Header></Header>
      <main>
        <Grid>
          {posts.map((v, i) => {
            return (
              <Island
                key={i}
                title={v.title}
                lastUpdatedAt={v.lastUpdatedAt}
                txt={v.txt}
              ></Island>
            );
          })}
        </Grid>
      </main>
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts().map((v) => {
        return {
          title: v.meta.title,
          lastUpdatedAt: v.meta.publishedAt,
          txt: v.txt,
        };
      }),
    },
  };
};

export default Home;
