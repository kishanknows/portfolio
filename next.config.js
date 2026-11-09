/** @type {import('next').NextConfig} */
// Served from GitHub Pages at https://kishanknows.github.io/portfolio/
const basePath = "/portfolio";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: `${basePath}/`,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
