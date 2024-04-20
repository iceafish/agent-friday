/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  transpilePackages: ["next-international", "international-types"],
};

export default nextConfig;
