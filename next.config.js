'use strict';

const withCss = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
// from: https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

module.exports = compose(withCss, withTypescript, withBundleAnalyzer)({
  // explicitly set the static export map so the engine doesn't get confused
  // with index.css.d.ts or _app.css.d.ts files
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },

  // Configs for withCss
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },

  // Configs for withBundleAnalyzer
  analyzeBrowser: process.env.ANALYZE,
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html',
      openAnalyzer: true,
    },
  },
});
