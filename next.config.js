const withTypescript = require('@zeit/next-typescript');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
// from: https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

module.exports = compose(withTypescript, withBundleAnalyzer)({
  // Configs for Bundle Analyzer
  analyzeBrowser: process.env.ANALYZE,
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html',
      openAnalyzer: true,
    },
  },
});
