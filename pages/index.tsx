import { config } from 'lib/config';
import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../features/header';
import { Grid } from '../features/Home/components/Grid';
import { Island } from '../features/Home/components/Island';
import { getAllPosts } from 'lib/posts';

type PostsProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<PostsProps> = ({ posts }: PostsProps) => {
  return (
    <div>
      <Head>
        <title>{config.site}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ed1c23" />
        <meta property="og:title" content={config.site} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${config.host}/`} />
        <meta property="og:description" content="ワイのブログやで" />
        <meta property="og:site_name" content={config.site} />
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
