var createWriteStream = require("fs").createWriteStream;
var _a = require("sitemap"), SitemapStream = _a.SitemapStream, streamToPromise = _a.streamToPromise;
// Define the URLs to include in the sitemap
var urls = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/prestations", changefreq: "daily", priority: 0.9 },
    { url: "/contact", changefreq: "daily", priority: 0.8 },
    { url: " /prestations#prestation-1", changefreq: "daily", priority: 0.7 },
    { url: " /prestations#prestation-2", changefreq: "daily", priority: 0.7 },
    { url: " /prestations#prestation-3", changefreq: "daily", priority: 0.7 },
    { url: " /prestations#qvt", changefreq: "daily", priority: 0.7 },
];
// Create a sitemap stream with the specified hostname
var sitemap = new SitemapStream({
    hostname: "https://www.massage-stephanie-heudre.fr/"
});
// Create a write stream for the sitemap.xml file
var writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);
// Write the URLs to the sitemap stream
urls.forEach(function (url) { return sitemap.write(url); });
// End the sitemap stream
sitemap.end();
// Convert the sitemap stream to a promise to handle success and errors
streamToPromise(sitemap)
    .then(function () {
    console.log("Sitemap generated successfully!");
})["catch"](function (err) {
    console.error("Error generating sitemap:", err);
});
