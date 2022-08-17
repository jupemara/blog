import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { Content } from 'features/posts/components/Content';
import { MDX } from 'lib/mdx';
import { getAllPosts } from 'lib/posts';
import { Header } from 'features/header';
import Head from 'next/head';
import { config } from 'lib/config';

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;
type P = {
  id: string;
};

const Post: NextPage<PostProps> = ({ meta, dir, mdx, txt }: PostProps) => {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ed1c23" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://${config.host}/${meta.slug}`}
        />
        <meta property="og:description" content={toOgDescription(txt)} />
        <meta property="og:site_name" content={config.site} />
        <meta property="article:published_time" content={meta.publishedAt} />
        <meta property="article:modified_time" content={meta.updatedAt} />
        <meta property="article:author" content={config.author} />
        <meta property="article:section" content={meta.tags[0]} />
        {meta.tags.map((v, i) => {
          return <meta key={i} property="article:tag" content={v} />;
        })}
      </Head>
      <Header></Header>
      <main>
        <Content title={meta.title}>
          <MDX dir={dir} mdx={mdx}></MDX>
        </Content>
      </main>
    </div>
  );
};

function toOgDescription(raw: string): string {
  const length = 100,
    v = raw.length <= 100 ? raw : raw.slice(0, length);
  return v.replaceAll('\n', ';').trimEnd();
}

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
