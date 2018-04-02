const express = require("express");
const articleFromDatabase = require("./controllers/headline");
const router = express.Router();


// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("./models");


// Routes
module.exports = {
// A GET route for scraping the echojs website
router.get("/scrape", scripts.story);
// First, we grab the body of the html with request
  
// Route for getting all Articles from the db
router.get("/articles", models.retrieveAllArticlesFromDatabase);

// Route for grabbing a specific Article by id, populate it with it's note
router.get("/articles/:id", );

// Route for saving/updating an Article's associated Note
router.post("/articles/:id", models.postNote);

// Start the server
router.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

};
