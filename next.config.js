const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV == 'development'
})

module.exports = withPWA({
  compress: true,
  swcMinify: true,
  optimizeFonts: true,
  reactStrictMode:false,
  cleanDistDir: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.infinitybots.xyz',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.infinitybots.gg',
        pathname: '/**'
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 100, 128, 150, 256, 384]
  },
});
