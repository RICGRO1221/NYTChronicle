const cheerio = require("cheerio");
const request = require("request");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing the first ten thread name and link\n" +
            "from The New York Time's news board:" +
            "\n***********************************\n");

const story = {};

// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request("https://www.nytimes.com/section/business?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Business&WT.nav=page", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  const $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  const results = [];  

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("article.story").each(function(i, element) {

      // Save the text of the element in a "title" variable
      let headline = $(element).find('h2.headline').text().trim();
      let dateline = $(element).find('time.dateline').text().trim();
      let byline = $(element).find('p.byline').text().trim();
      let summary = $(element).find('p.summary').text().trim();
      // var link = $(element).find('a.story-link').text().trim();
    
    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    // var link = $(element).children().attr("href");

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      headline: headline,
      summary: summary,
      byline: byline,
      dateLine: dateline
      // link: link
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});

module.exports = story;