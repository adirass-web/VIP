const path = require("path");

module.exports = function (eleventyConfig) {
  // Copy static assets verbatim into _site/
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  // Root HTML pages: language redirect, 404, legal
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("404.html");
  eleventyConfig.addPassthroughCopy("terms.html");
  eleventyConfig.addPassthroughCopy("privacy.html");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: false,
  };
};
