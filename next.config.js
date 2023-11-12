/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Other Next.js configurations...

  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    // Optional: Add if you want to disable automatic locale detection
    localeDetection: false,
  },
};

module.exports = nextConfig;
