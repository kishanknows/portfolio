/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  // ...other config options if needed
};

module.exports = nextConfig;
