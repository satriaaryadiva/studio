const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    // Allows testing on local network devices (e.g., mobile phones) without warnings in Next.js 16+
    experimental: {
        allowedDevOrigins: [
            "localhost:3000",
            "192.168.100.10:3000"
        ]
    }
}

module.exports = nextConfig
