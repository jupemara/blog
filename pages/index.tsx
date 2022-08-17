import { config } from 'lib/config';
import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Header } from 'features/header';
import { Grid } from 'features/Home/components/Grid';
import { Island } from 'features/Home/components/Island';
import { getAllPosts } from 'lib/posts';
import dayjs from 'dayjs';

type PostsProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<PostsProps> = ({ posts }: PostsProps) => {
  return (
    <>
      <Head>
        <title>{config.site}</title>
        <meta property="og:title" content={config.site} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${config.host}/`} />
        <meta property="og:description" content="ワイのブログやで" />
        <meta property="og:site_name" content={config.site} />
      </Head>
      <Header />
      <main>
        <Grid>
          {posts.map((v) => {
            return (
              <Island
                key={v.slug}
                slug={v.slug}
                title={v.title}
                lastUpdatedAt={v.lastUpdatedAt}
                txt={v.txt}
              ></Island>
            );
          })}
        </Grid>
      </main>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts()
        .map((v) => {
          return {
            slug: v.meta.slug,
            title: v.meta.title,
            lastUpdatedAt: v.meta.publishedAt,
            txt: v.txt,
          };
        })
        .sort((a, b) => {
          const x = dayjs(a.lastUpdatedAt),
            y = dayjs(b.lastUpdatedAt);
          return y.unix() - x.unix();
        }),
    },
  };
};

export default Home;
