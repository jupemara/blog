import React, { FC } from 'react';

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
      test contents だよ
      {/* TODO: remark + reshype */}
    </MDXContext.Provider>
  );
};
