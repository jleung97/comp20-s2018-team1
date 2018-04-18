const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');
var validator = requre('validator');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/semesterproj';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
        db = databaseConnection;
});

  app.get('/times', function(req, res) {

          db.collection('table', function(error, coll) {

                  if (error) {
                          console.log("Error: " + error);
                          res.send(500);
                  }
                  else {
                          coll.find(function(err, result) {
                                  result.sort({location: -1, timestamp: -1}).toArray(function(error, array) {
                                          res.send(JSON.stringify(array));
                                  });
                          });
                  }
          });
  });

  app.post("/submit", function(req, res) {
          response.setHeader("Access-Control-Allow-Origin", "*", false);

          console.log("submitting " + req.body);

          if(req.body.location != null) {
                  var loc = req.body.location;
          }

          var time_array = new Array(24);

          //there has to be a way to make this more modular--any suggestions???
          if(req.body.tenAM != null) {
                  time_array[10] = parseInt(req.body.tenAM);

                  if(isNaN(tenAM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 10AM', type:'internal'});
                  }
          }

          if(req.body.elevenAM != null) {
                  time_array[11] = parseInt(req.body.elevenAM);

                  if(isNaN(elevenAM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 11AM', type:'internal'});
                  }
          }

          if(req.body.twelvePM != null) {
                  time_array[12] = parseInt(req.body.twelvePM);

                  if(isNaN(twelvePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 12PM', type:'internal'});
                  }
          }

          if(req.body.onePM != null) {
                  time_array[13] = parseInt(req.body.onePM);

                  if(isNaN(onePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 1PM', type:'internal'});
                  }
          }

          if(req.body.twoPM != null) {
                  time_array[14] = parseInt(req.body.twoPM);

                  if(isNaN(twoPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 2PM', type:'internal'});
                  }
          }

          if(req.body.threePM != null) {
                  time_array[15] = parseInt(req.body.threePM);

                  if(isNaN(threePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 3PM', type:'internal'});
                  }
          }

          if(req.body.fourPM != null) {
                  time_array[16] = parseInt(req.body.fourPM);

                  if(isNaN(fourPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 4PM', type:'internal'});
                  }
          }

          if(req.body.fivePM != null) {
                  time_array[17] = parseInt(req.body.fivePM);

                  if(isNaN(fivePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 5PM', type:'internal'});
                  }
          }

          if(req.body.sixPM != null) {
                  time_array[18] = parseInt(req.body.sixPM);

                  if(isNaN(sixPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 6PM', type:'internal'});
                  }
          }

          if(req.body.sevenPM != null) {
                  time_array[19] = parseInt(req.body.sevenPM);

                  if(isNaN(sevenPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 7PM', type:'internal'});
                  }
          }

          if(req.body.eightPM != null) {
                  time_array[20] = parseInt(req.body.eightPM);

                  if(isNaN(eightPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 8PM', type:'internal'});
                  }
          }

          if(req.body.ninePM != null) {
                  time_array[21] = parseInt(req.body.ninePM);

                  if(isNaN(ninePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 9PM', type:'internal'});
                  }
          }

          if(req.body.tenPM != null) {
                  time_array[22] = parseInt(req.body.tenPM);

                  if(isNaN(tenPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 10PM', type:'internal'});
                  }
          }

          if(req.body.elevenPM != null) {
                  time_array[23] = parseInt(req.body.elevenPM);

                  if(isNaN(elevenPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 11PM', type:'internal'});
                  }
          }

          if(req.body.twelveAM != null) {
                  time_array[0] = parseInt(req.body.twelveAM);

                  if(isNaN(twelveAM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 12AM', type:'internal'});
                  }
          }

          if(req.body.oneAM != null) {
                  time_array[1] = parseInt(req.body.oneAM);

                  if(isNaN(oneAM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 1AM', type:'internal'});
                  }
          }


          var toInsert = {
                  "location": loc;

                  for(var i = 0; i < time_array.length; i++) {
                          if(time_array[i] != null) {
                                  "timestamp": i,
                                  "traffic": time_array[i];
                          }
                  }
          }

          db.collection('table', function(error, coll) {

                  if (error) {
                          console.log("Error: " + error);
                          res.send(500);
                  }
                  else {
                          coll.insert(toInsert, function(error, result) {
                                  if(error) {
                                          console.log("Error: " + error);
                                          res.send(500);
                                  }
                                  else {
                                          res.send(<html><head><h2>Thanks for your submission!</h2></head></html>);
                                  }
                          });
                  }
          });
  });

  app.listen(process.env.PORT || 8888);
