/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images-na.ssl-images-amazon.com',
            },
            {
                protocol: 'https',
                hostname: 'images.cdn3.buscalibre.com'
            },
            {
                protocol: 'https',
                hostname: 'images.cdn2.buscalibre.com'
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com'
            }
        ]
    }
}

module.exports = nextConfig