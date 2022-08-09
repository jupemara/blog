let ctx: __WebpackModuleApi.RequireContext | null = null;

export function context(): __WebpackModuleApi.RequireContext {
  if (!ctx) {
    ctx = require.context('../posts', true);
  }
  return ctx;
}
