/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://marcusgronna.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  // Exclude the old non-locale routes since all content lives under /sv and /en
  exclude: ["/about", "/contact", "/education", "/portfolio", "/projects/*"],
  transform: async (config, path) => {
    // Assign priorities based on route type
    let prio = 0.7;
    if (path === "/sv" || path === "/en") {
      prio = 1.0;
    } else if (path.includes("/portfolio") || path.includes("/projects/")) {
      prio = 0.9;
    } else if (path.includes("/about") || path.includes("/contact")) {
      prio = 0.8;
    }

    return {
      loc: path,
      changefreq: "weekly",
      priority: prio,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    // Ensure both language home pages and key pages are always included
    const staticPaths = [
      "/sv",
      "/en",
      "/sv/about",
      "/en/about",
      "/sv/contact",
      "/en/contact",
      "/sv/education",
      "/en/education",
      "/sv/portfolio",
      "/en/portfolio",
    ];
    return staticPaths.map((path) => ({
      loc: path,
      changefreq: "weekly",
      priority:
        path === "/sv" || path === "/en"
          ? 1.0
          : path.includes("portfolio")
            ? 0.9
            : 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
