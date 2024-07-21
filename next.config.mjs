/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '', // If there's no specific port, leave it as an empty string
        pathname: '/u/**',
      },
    ],
    // remotePatterns: ['avatars.githubusercontent.com'],
  },
}

export default nextConfig
