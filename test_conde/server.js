var express = require('express');
  app = express();
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  port = process.env.PORT || 3001;

  var routes = require('./api/routes/newsRoutes'); //importing route
  routes(app); //register the route

app.listen(port);

console.log('news list RESTful API server started on: ' + port);