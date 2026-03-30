/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repoName = 'slavnyimalyi';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
