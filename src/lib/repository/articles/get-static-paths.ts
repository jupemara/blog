import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticPathsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { articleDir } from './const';

export interface ArticlePath extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ArticlePath>
> => {
  const vs = await fs.promises.readdir(path.join(process.cwd(), articleDir));
  return {
    paths: extractPaths(vs).map((v) => {
      return {
        params: {
          id: v,
        },
      };
    }),
    fallback: false,
  };
};

function extractPaths(paths: string[]): string[] {
  const regex = new RegExp(/.mdx?$/);
  return paths.map((v) => {
    return v.replace(regex, '');
  });
}
