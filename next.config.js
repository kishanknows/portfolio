/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/repo",
  assetPrefix: "/repo/",
  // ...other config options if needed
};

module.exports = nextConfig;
