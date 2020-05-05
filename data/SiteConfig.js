const config = {
    siteTitle: 'Steve Ruben',
    siteTitleShort: 'Steve Ruben',
    siteTitleAlt: 'Steve Ruben',
    siteLogo: '/logo/logo-1024.png',
    siteUrl: 'https://steve.abodah.fr/',
    repo: 'https://github.com/tryptich',
    pathPrefix: '',
    postsPerPage: 12,
    dateFromFormat: 'YYYY-MM-DD',
    dateFormat: 'MMMM Do, YYYY',
    siteDescription:
      'Steve Ruben is a full stack software developer specializing in architecture.',
    siteRss: '/rss.xml',
    googleAnalyticsID: 'G-F7HWS3Z9RX',
    postDefaultCategoryID: 'Tech',
    newsletter: '',
    newsletterEmbed: '',
    userName: 'Steve Ruben',
    userEmail: 'steve@abodah.fr',
    userTwitter: 'steveruben2015',
    twitterUrl: 'https://twitter.com/steveruben2015',
    menuLinks: [
      {
        name: 'About me',
        link: '/me/',
      },
      {
        name: 'Articles',
        link: '/blog/',
      },
      {
        name: 'Contact',
        link: '/contact/',
      },
    ],
    themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
    backgroundColor: '#ffffff',
  }
  
  // Make sure pathPrefix is empty if not needed
  if (config.pathPrefix === '/') {
    config.pathPrefix = ''
  } else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
  }
  
  // Make sure siteUrl doesn't have an ending forward slash
  if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)
  
  // Make sure siteRss has a starting forward slash
  if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`
  
  module.exports = config