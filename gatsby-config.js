module.exports = {
  siteMetadata: {
    title: `Max Kuhn`,
    siteUrl: `http://www.maxkuhn.ca`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }
]
};