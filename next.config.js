/** @type {import('next').NextConfig} */
const nextConfig = {
 
  env: {
    SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET: process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_SIGN_OUT_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_OUT_URL,
    NEXT_PUBLIC_CLERK_API_URL: process.env.NEXT_PUBLIC_CLERK_API_URL,
    NEXT_PUBLIC_CLERK_API_KEY: process.env.NEXT_PUBLIC_CLERK_API_KEY,
    NEXT_PUBLIC_CLERK_API_SECRET: process.env.NEXT_PUBLIC_CLERK_API_SECRET,
    
  },
  images:{
    domains: ['cdn.sanity.io'],
  }
};

module.exports = nextConfig;
