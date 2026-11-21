/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.1.162"],
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
