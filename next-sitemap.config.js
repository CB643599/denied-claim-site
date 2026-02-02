/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://deniedclaimhelp.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};


