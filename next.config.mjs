/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // repo name is shiying-portfolio
  basePath: "/shiying-portfolio",
  assetPrefix: "/shiying-portfolio/",
};

export default nextConfig;
