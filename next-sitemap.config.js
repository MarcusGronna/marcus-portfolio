/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://marcusgronna.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Prioritera startsida och portfolio
    const prio = path === "/" ? 1.0 : path.includes("portfolio") ? 0.9 : 0.7;
    return { loc: path, changefreq: "weekly", priority: prio, lastmod: new Date().toISOString() };
  },
};
// This configuration generates a sitemap for the site with a focus on SEO, prioritizing the homepage and portfolio pages.
// It includes a robots.txt file and sets the change frequency to weekly.
