/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ["en-us"],
    defaultLocale: "en-us",
  },
}

module.exports = nextConfig
