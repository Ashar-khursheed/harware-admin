// next.config.js
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  // Removed the "env" block

  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1:8000",
      },
      {
        protocol: "https",
        hostname: "api.in-sourceit.com",
      },
    ],
  },

  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
