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
    outputFileTracingExcludes: {
      "*": [
        "./node_modules/@next/swc-linux-x64-gnu",
        "./node_modules/@next/swc-linux-x64-musl",
        "./node_modules/@esbuild/linux-x64",
      ],
    },
  },
};

export default withNextVideo(nextConfig, { folder: "public/video" });
