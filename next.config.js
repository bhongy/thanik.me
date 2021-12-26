/** @type {import('next').NextConfig} */
'use strict';

module.exports = {
  // explicitly set the static export map so the engine doesn't get confused
  // with index.css.d.ts or _app.css.d.ts files
  // exportPathMap() {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },

  reactStrictMode: true,
}
