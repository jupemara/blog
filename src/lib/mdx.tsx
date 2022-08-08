import Image from 'next/image';
import { Processor, unified } from 'unified';
import React, { FC } from 'react';
import { context } from './context';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkMdx from 'remark-mdx';
import remarkEmoji from 'remark-emoji';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import rehypeHighlight from 'rehype-highlight';
import path from 'path';

const MDXContext = React.createContext<{
  dir: string;
  ctx: __WebpackModuleApi.RequireContext;
} | null>(null);

export const MDX: FC<{
  dir: string;
  mdx: string;
}> = (props) => {
  return (
    <MDXContext.Provider
      value={{
        ctx: context(),
        dir: props.dir,
      }}
    >
      {processor().processSync(props.mdx).result as JSX.Element}
    </MDXContext.Provider>
  );
};

function processor(): Processor {
  return unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkMdx)
    .use(remarkRehype)
    .use(remarkEmoji)
    .use(rehypeHighlight)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        img: MDXImage,
      },
    });
}

const MDXImage: FC = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) => {
  const mdxctx = React.useContext(MDXContext);
  if (!mdxctx) {
    throw new Error('MDXContext is null');
  }
  const { alt } = props,
    src = props?.src ? props.src : '',
    { dir, ctx } = mdxctx;
  return (
    <Image
      alt={alt}
      src={
        src?.startsWith('https://') ||
        src?.startsWith('http://') ||
        src?.startsWith('/')
          ? src
          : ctx(`./${path.join(dir, src)}`)
      }
    ></Image>
  );
};
