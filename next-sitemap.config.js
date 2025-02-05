/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://gartype.info',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://gartype.info/sitemap.xml',
    ],
  },
  // 添加 lastmod
  autoLastmod: true,
}