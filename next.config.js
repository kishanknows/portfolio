/** @type {import('next').NextConfig} */
// Served from GitHub Pages at the custom domain https://kishanknows.in/
// (to serve from https://kishanknows.github.io/portfolio/ instead, set basePath to "/portfolio"
// and remove `cname` from .github/workflows/deploy.yml).
const basePath = "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: `${basePath}/`,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
