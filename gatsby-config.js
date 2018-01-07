const me = {
  name: 'Thanik Bhongbhibhat',
};

module.exports = {
  siteMetadata: {
    title: 'thanik.me',
    description: `Personal Website of ${me.name}`,
    author: me.name,
    siteUrl: 'https://thanik.me',
    me,
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
