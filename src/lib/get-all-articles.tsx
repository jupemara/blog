import matter from 'gray-matter';

const contexts = require.context('../posts', true); // TODO: contexts => context

export type Post = {
  meta: {
    [k: string]: string; // TODO: define matter type
  };
  mdx: string;
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
