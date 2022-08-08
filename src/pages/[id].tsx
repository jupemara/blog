import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllPaths, getAllPosts, Post } from '../lib/get-all-articles';
import { ArticleProps } from '../lib/repository/articles/get-static-props';

type PostPropsV2 = InferGetStaticPropsType<typeof getStaticProps>;
type PostProps = {
  props: Post;
};

interface PostPath extends ParsedUrlQuery {
  // TODO: fixup
  id: string;
}

const Post: NextPage<PostPropsV2> = (props: PostPropsV2) => {
  return <div>{props.meta.slug}</div>;
};

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<PostPath>
> {
  const posts = getAllPosts();
  console.log(posts[0].meta.slug);
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

export async function getStaticProps({
  params,
}: {
  params: PostPath;
}): Promise<PostProps> {
  const post = getAllPosts().find((v) => {
    return v.meta.slug === params.id;
  });
  if (!post) {
    throw new Error(`cloudn't find specified post. slug: "${params.id}"`);
  }
  return {
    props: {
      meta: post.meta,
      mdx: post.mdx,
    },
  };
}

export default Post;
