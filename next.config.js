const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com", "cdn.infinitybots.xyz"],
  },
});
