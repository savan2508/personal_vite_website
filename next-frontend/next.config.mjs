import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  experimental: {
    outputFileTracingIncludes: {
      "/*": [
        "./node_modules/next-video/dist/build-utils/chunk-asset.js",
        "./node_modules/next-video/dist/build-utils/chunk-graph.js",
        "./node_modules/next-video/dist/build-utils/chunk-store.js",
      ],
    },
  },
};

export default withNextVideo(nextConfig);
