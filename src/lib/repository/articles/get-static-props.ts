import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { ArticlePath } from './get-static-paths';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { articleDir } from './const';
import { serialize } from 'next-mdx-remote/serialize';

export type ArticleProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async (
  context: GetStaticPropsContext<ArticlePath>,
) => {
  const id = !!context.params?.id ? context.params.id : '',
    articlePath = fs.existsSync(path.join(process.cwd(), articleDir, id))
      ? path.join(id, 'index.mdx')
      : id + '.mdx',
    raw = await fs.promises.readFile(
      path.join(process.cwd(), articleDir, articlePath),
    ),
    { content, data } = matter(raw),
    mdx = await serialize(content, {
      scope: data,
      mdxOptions: {
        rehypePlugins: [require('@mapbox/rehype-prism')],
      },
    });
  return {
    props: {
      content: mdx,
      meta: data,
    },
  };
};
