/** @type {import('next').NextConfig} */
const nextConfig = {
  // remove output export for vercel
  images: { unoptimized: true },
};

export default nextConfig;
