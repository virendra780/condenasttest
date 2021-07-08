'use strict';

const axios = require('axios');
const CONSTANTS = require('../../Constants');

exports.list_all_news = function(req, res) {
    const url = CONSTANTS.NEWS_API_URL + CONSTANTS.NEWS_API_KEY;
    const response = axios.get(url)
    .then(function(response) {
        res.json(response.data);
    }).catch(function(error) {
        res.json(error.message);
    });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

