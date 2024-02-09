/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    formats: [],
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
        },
      ],
    },
};

export default nextConfig;
