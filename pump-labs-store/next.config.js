/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "images.unsplash.com"},
            {hostname: "lh3.googleusercontent.com"},
            {hostname: "media.istockphoto.com"}, //ONLY FOR TESTING, DONT FORGET TO REMOVE
        ],
    },
    experimental: {
        serverActions: true //allows server actions

    },
};

module.exports = nextConfig;
