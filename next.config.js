/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: 'raw-loader',
    });
    return config;
  },
};
// const withMDX = require('@next/mdx')({
//   extension: /.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
// });
// module.exports = withMDX(nextConfig);
module.exports = nextConfig;
