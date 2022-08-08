// TODO: rename module name to "blog" or something like that?
import matter from 'gray-matter';
import path from 'path';

const contexts = require.context('../posts', true); // TODO: contexts => context

export type Post = {
  meta: {
    [k: string]: string; // TODO: define matter type
  };
  mdx: string;
  dir: string;
};

let posts: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (!!posts) {
    return posts;
  }
  return contexts
    .keys()
    .filter((v: string) => v.endsWith('.md') || v.endsWith('.mdx'))
    .map((v: string) => {
      const { data, content } = matter(contexts(v).default);
      return {
        meta: data,
        mdx: content,
        dir: path.dirname(v),
      };
    });
}

export function getAllPaths(): string[] {
  if (!posts) {
    return [];
  }
  return posts?.map((v) => {
    return v.meta.slug;
  });
}
