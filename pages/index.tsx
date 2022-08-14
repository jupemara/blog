import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../features/header';
import { Grid } from '../features/Home/components/Grid';
import { Island } from '../features/Home/components/Island';

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
              ></Island>
            );
          })}
        </Grid>
      </main>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = [
    {
      title: 'nextjs で画像を相対パスで読み込ませたかった',
      lastUpdatedAt: '2022-08-09',
      thumbnail: 'コレはショートテキストでテスト的に書いています',
    },
    {
      title: 'JLCPCB に3Dプリンタ出した話',
      lastUpdatedAt: '2022-07-25',
      thumbnail: '',
    },
    {
      title: 'DMM make に3Dプリンタ出した話',
      lastUpdatedAt: '2022-06-25',
      thumbnail: '',
    },
    {
      title: 'planck endgame: eyes を作って使ってる話',
      lastUpdatedAt: '2022-05-11',
      thumbnail: '',
    },
    {
      title: 'そろそろiPad mini を買いに行きましょう',
      lastUpdatedAt: '2022-04-11',
      thumbnail: '',
    },
    {
      title: 'Cloud Functions tips for go113',
      lastUpdatedAt: '2021-09-11',
      thumbnail: '',
    },
    {
      title: 'HEXGEARS の PBT keycaps が夏っぽくて超おしゃれ',
      lastUpdatedAt: '2021-06-25',
      thumbnail: '',
    },
    {
      title: 'keebstuff の黒LEMOが届いたぜ!!',
      lastUpdatedAt: '2020-06-25',
      thumbnail: '',
    },
  ];
  return {
    props: {
      posts,
    },
  };
};

export default Home;
