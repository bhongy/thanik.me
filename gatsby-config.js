module.exports = {
  siteMetadata: {
    title: 'Thanik Bhongbhibhat',
    description: 'Personal Website of Thanik Bhongbhibhat',
    author: 'Thanik Bhongbhibhat',
    siteUrl: 'https://thanik.me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
}
