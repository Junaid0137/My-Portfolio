/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "drive.google.com",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "www.lifewire.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "static.wixstatic.com",
                pathname: "**",
            }
        ]
    }
};

export default nextConfig;
