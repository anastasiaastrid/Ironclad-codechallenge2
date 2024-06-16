/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },

  env: {
    CONTENTFUL_SPACE_ID: "02jhtpyaki6x",
    CONTENTFUL_ACCESS_TOKEN: "R3tc5BSWutcLbhwDmpGmgbf2vSrapP786FEMfs0-2-M",
  },
};

export default nextConfig;
