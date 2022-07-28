import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticPathsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';

const dir = 'src/articles';

export interface WithId extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<WithId>
> => {
  const vs = await fs.promises.readdir(path.join(process.cwd(), dir));
  return {
    paths: extractPaths(vs).map((v) => {
      return {
        params: {
          id: v,
        } as WithId,
      };
    }),
    fallback: false,
  };
};

function extractPaths(paths: string[]): string[] {
  const regex = new RegExp(/.mdx?$/);
  return paths.map((v) => {
    if (!!regex.exec(v)) {
      return v.replace(regex, '');
    }
    return v;
  });
}
