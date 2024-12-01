const withTM = require("next-transpile-modules")(["@starter-kit/components", "@starter-kit/utils"]);
const isProd = process.env.NEXT_PUBLIC_MODE === 'production';

module.exports = withTM({
  assetPrefix: isProd ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
});

async rewrites() {
    return [
      {
        source: "/tai",
        destination: "https://starter-kit-sand-one.vercel.app/tai",
      },
      {
        source: "/tai/:path*",
        destination: "https://starter-kit-sand-one.vercel.app/tai/:path*",
      },
    ];
  },
