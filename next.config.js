const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const localeSubpaths = {};

const defaultConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  poweredByHeader: false,
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
};

module.exports = withPlugins([withBundleAnalyzer({})], defaultConfig);
