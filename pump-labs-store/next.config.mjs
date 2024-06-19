/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.unsplash.com"}],
    },
    experimental: {
        serverActions: true //allows server actions

    },
};

export default nextConfig;
