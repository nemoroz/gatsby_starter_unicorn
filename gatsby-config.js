module.exports = {
  siteMetadata: {
    title: `Blog`,
    author: `Ruslan`,
    description: `Пишу о том, что узнаю сам`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby_theme_unicorn",
    }
  ]
};
