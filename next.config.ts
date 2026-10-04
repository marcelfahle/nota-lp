import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // nota.wtf is a launch domain; everything on it lives at withnota.com.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?:www\\.)?nota\\.wtf" }],
        destination: "https://www.withnota.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
