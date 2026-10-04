/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mysql2', 'nodemailer'],
  },
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
