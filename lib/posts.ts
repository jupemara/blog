import { context } from './context';
import matter from 'gray-matter';
import path from 'path';
import { z } from 'zod';

const Meta = z.object({
  slug: z.string(),
  title: z.string(),
  publishedAt: z.string(),
  updatedAt: z.string(),
  tags: z.array(z.string()).default([]),
  thumbnail: z.string().default('/posts/default-thumbnail.png'),
});

type Meta = z.infer<typeof Meta>;

export type Post = {
  meta: Meta;
  mdx: string;
  dir: string;
};

let posts: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (!!posts) {
    return posts;
  }
  const ctx = context();
  return ctx
    .keys()
    .filter((v: string) => v.endsWith('.md') || v.endsWith('.mdx'))
    .map((v: string) => {
      const { data, content } = matter(ctx(v).default);
      return {
        meta: Meta.parse(data),
        mdx: content,
        dir: path.dirname(v),
      };
    });
}
