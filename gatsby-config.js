module.exports = {
  plugins: [
    {
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        plugins: [
          {
            options: {
              maxWidth: 590,
            },
            resolve: 'gatsby-remark-images',
          },
          {
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      options: {
        // trackingId: 'ADD YOUR TRACKING ID HERE',
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
    'gatsby-plugin-feed',
    {
      options: {
        background_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
        name: "Faheem's Blog",
        short_name: 'faheem.dev',
        start_url: '/',
        theme_color: '#663399',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
      resolve: 'gatsby-plugin-typography',
    },
    'gatsby-plugin-sass',
  ],

  siteMetadata: {
    author: 'Muhammad Faheem Akhtar',
    description: 'Faheem is a freelance Full Stack JavaScript developer.',
    siteUrl: 'https://faheem.dev',
    social: {
      twitter: 'mfaheemakhtar',
    },
    title: 'Faheem - Full Stack JavaScript Developer',
  },
};
