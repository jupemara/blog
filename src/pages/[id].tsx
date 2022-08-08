import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ArticleContent } from '../features/articles/components/Content';
import { getAllPosts, Post } from '../lib/get-all-articles';
import { MDX } from '../lib/mdx';

type PostPropsV2 = InferGetStaticPropsType<typeof getStaticProps>;
type PostProps = {
  props: Post;
};

// TODO: fixup
interface PostPath extends ParsedUrlQuery {
  id: string; // TODO: use slug as id
}

const Post: NextPage<PostPropsV2> = (props: PostPropsV2) => {
  return (
    <>
      <div>{props.meta.slug}</div>
      <ArticleContent title={props.meta.title}>
        <MDX dir={props.dir} mdx={props.mdx}></MDX>
      </ArticleContent>
    </>
  );
};

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<PostPath>
> {
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
}

export async function getStaticProps(
  context: GetStaticPropsContext<PostPath>,
): Promise<PostProps> {
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
