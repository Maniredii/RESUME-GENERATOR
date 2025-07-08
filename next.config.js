/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove appDir as it's no longer needed in Next.js 14
  },
  // Remove env.PORT as it's not a valid Next.js config option
  // Use the -p flag in package.json scripts instead
  //manideep Reddy
}

module.exports = nextConfig 