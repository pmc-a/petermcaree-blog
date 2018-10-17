const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Peter McAree - Personal Blog", // <title>
  shortSiteTitle: "Personal Blog", // <title> ending for posts and pages
  siteDescription: "Peter McAree's personal blog, focusing on technology, tools and others!",
  siteUrl: "https://petermcaree.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Peter McAree",
  authorTwitterAccount: "PMc_A",
  // info
  infoTitle: "Peter McAree",
  infoTitleNote: "Personal Blog",
  // manifest.json
  manifestName: "Peter McAree - Personal Blog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "me@petermcaree.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/pmc-a" },
    { name: "twitter", url: "https://twitter.com/PMc_A" },
    { name: "linkedin", url: "https://www.linkedin.com/in/pmc-a/" }
  ]
};
