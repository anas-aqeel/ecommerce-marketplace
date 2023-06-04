/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID: "cgzat4gi",
    SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET: "production",
  },
};

module.exports = nextConfig;
