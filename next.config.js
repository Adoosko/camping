const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "imgcdn.stablediffusionweb.com",
      },
      {
        hostname: "preview.redd.it",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
