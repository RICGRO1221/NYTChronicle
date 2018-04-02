

var db = require("./models");

const retrieveArticleFromDatabase = function(req, res) {
  // TODO: Finish the route so it grabs all of the articles
  db.Article.find({})
    .populate("note")
    .then(function(dbArticle) {
      // If all Users are successfully found, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
};

module.exports = controllerArticle;