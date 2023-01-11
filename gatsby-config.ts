import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-tsconfig-paths',
    'gatsby-image-background-slider',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `./src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'backgrounds',
        path: './src/images/bg/',
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: [
          '/node_modules/slick-carousel/slick/slick.css',
          '/node_modules/slick-carousel/slick/slick-theme.css',
        ],
        whitelist: [
          'slick-slider',
          'slick-initialized',
          'slick-list',
          'slick-track',
          'slick-slide',
          'slick-active',
          'slick-current',
        ],
      },
    },
  ],
};

export default config;
