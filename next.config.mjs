/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gw.alicdn.com"
      }
    ]
  }
};

export default nextConfig;
