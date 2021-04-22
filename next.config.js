const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config');

const defaultConfig = {
  poweredByHeader: false,
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  i18n,
};

module.exports = withPlugins([withBundleAnalyzer({})], defaultConfig);
