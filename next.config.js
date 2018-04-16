const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },

  webpack(config, { isServer }) {
    if (!isServer && process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './bundles/client.html',
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};
