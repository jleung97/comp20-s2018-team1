const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const validator = require('validator');
const PORT = process.env.PORT || 5000

var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/semesterproj';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
        db = databaseConnection;
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/times', function(req, res) {

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
  })

  .post("/submit", function(req, res) {
          res.setHeader("Access-Control-Allow-Origin", "*", false);

          if(req.body.location != null) {
                  var loc = req.body.location;
          }

          var time_array = new Array(24);

          //there has to be a way to make this more modular--any suggestions???
          if(req.body.tenAM != null) {
                  time_array[10] = req.body.tenAM;

                  if(isNaN(req.body.tenAM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 10AM', type:'internal'});
                  }
          }

          if(req.body.elevenAM != null) {
                  time_array[11] = req.body.elevenAM;

                  if(isNaN(req.body.elevenAM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 11AM', type:'internal'});
                  }
          }

          if(req.body.twelvePM != null) {
                  time_array[12] = req.body.twelvePM;

                  if(isNaN(req.body.twelvePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 12PM', type:'internal'});
                  }
          }

          if(req.body.onePM != null) {
                  time_array[13] = req.body.onePM;

                  if(isNaN(req.body.onePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 1PM', type:'internal'});
                  }
          }

          if(req.body.twoPM != null) {
                  time_array[14] = req.body.twoPM;

                  if(isNaN(req.body.twoPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 2PM', type:'internal'});
                  }
          }

          if(req.body.threePM != null) {
                  time_array[15] = req.body.threePM;

                  if(isNaN(req.body.threePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 3PM', type:'internal'});
                  }
          }

          if(req.body.fourPM != null) {
                  time_array[16] = req.body.fourPM;

                  if(isNaN(req.body.fourPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 4PM', type:'internal'});
                  }
          }

          if(req.body.fivePM != null) {
                  time_array[17] = req.body.fivePM;

                  if(isNaN(req.body.fivePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 5PM', type:'internal'});
                  }
          }

          if(req.body.sixPM != null) {
                  time_array[18] = req.body.sixPM;

                  if(isNaN(req.body.sixPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 6PM', type:'internal'});
                  }
          }

          if(req.body.sevenPM != null) {
                  time_array[19] = req.body.sevenPM;

                  if(isNaN(req.body.sevenPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 7PM', type:'internal'});
                  }
          }

          if(req.body.eightPM != null) {
                  time_array[20] = req.body.eightPM;

                  if(isNaN(req.body.eightPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 8PM', type:'internal'});
                  }
          }

          if(req.body.ninePM != null) {
                  time_array[21] = req.body.ninePM;

                  if(isNaN(req.body.ninePM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 9PM', type:'internal'});
                  }
          }

          if(req.body.tenPM != null) {
                  time_array[22] = req.body.tenPM;

                  if(isNaN(req.body.tenPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 10PM', type:'internal'});
                  }
          }

          if(req.body.elevenPM != null) {
                  time_array[23] = req.body.elevenPM;

                  if(isNaN(req.body.elevenPM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 11PM', type:'internal'});
                  }
          }

          if(req.body.twelveAM != null) {
                  time_array[0] = req.body.twelveAM;

                  if(isNaN(req.body.twelveAM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 12AM', type:'internal'});
                  }
          }

          if(req.body.oneAM != null) {
                  time_array[1] = req.body.oneAM;

                  if(isNaN(req.body.oneAM)) {
                          res.send(400, {status:400, message: 'Incorrect parameter for 1AM', type:'internal'});
                  }
          }


          var toInsert = {
                  "location": loc,
                  "times" : []
          };

          for (var i = 0; i < time_array.length; i++) {
                  if (time_array[i] != null) {
                          var entry = {
                                  "timestamp": i,
                                  "traffic": time_array[i]
                          };
                          toInsert["times"].push(entry);
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
                                          res.send("<html><head><h2>Thanks for your submission for "
                                          + toInsert.location + "!</h2></head></html>");
                                  }
                          });
                  }
          });
  })
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
