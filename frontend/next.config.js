/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://umurave-api.onrender.com',
  },
  images: {
    domains: ['umurave-api.onrender.com'], // Add if API serves images
  },
};

module.exports = nextConfig; 