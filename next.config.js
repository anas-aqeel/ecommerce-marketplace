/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET: process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET,
    
  },
};

module.exports = nextConfig;
