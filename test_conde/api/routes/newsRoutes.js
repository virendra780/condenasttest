'use strict';
module.exports = function(app) {
  var news = require('../controllers/newsController');

  // todoList Routes
  app.route('/news')
    .get(news.list_all_news);

  app.route('/news/:newsId')
    .get(news.read_a_task);
};