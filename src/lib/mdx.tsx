import React, { FC } from 'react';
import { Processor, unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';

// TODO: when "require.context" was called twice use cache ?? or not ??
const ctx = require.context('../posts', true);

const MDXContext = React.createContext<{
  dir: string;
  ctx: __WebpackModuleApi.RequireContext;
} | null>(null);

export const MDX: FC<{
  dir: string;
  // context: __WebpackModuleApi.RequireContext;
  mdx: string;
}> = (props) => {
  return (
    <MDXContext.Provider
      value={{
        // context: props.context,
        ctx: ctx,
        dir: props.dir,
      }}
    >
      {processor().processSync(props.mdx).result}
      {/* TODO: remark + reshype */}
    </MDXContext.Provider>
  );
};

function processor(): Processor {
  return unified().use(remarkParse).use(remarkRehype).use(rehypeReact, {
    createElement: React.createElement,
  });
}
