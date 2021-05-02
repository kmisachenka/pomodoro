const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const defaultConfig = {
  poweredByHeader: false,
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
};

module.exports = withPlugins([withBundleAnalyzer({})], defaultConfig);
