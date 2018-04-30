//copied from simpleposting app.js example
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var validator = requre('validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 8000));

var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/semesterproj';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

app.get('/', function(req, res) {

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

app.post("/eaton_submit", function(req, res) {
        response.setHeader("Access-Control-Allow-Origin", "*", false);

        console.log("submitting " + req.body);

        if(req.body.location != null) {
                var loc = req.body.location;
        }

	var day = Date.getDay();
        var time_array = [];

        //there has to be a way to make this more modular--any suggestions???
        if(req.body.tenAM != null) {
                time_array.push({population:parseInt(req.body.tenAM), time:10});

                if(isNaN(tenAM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 10AM', type:'internal'});
                }
        }

        if(req.body.elevenAM != null) {
                time_array.push({population:parseInt(req.body.elevenAM), time:11});

                if(isNaN(elevenAM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 11AM', type:'internal'});
                }
        }

        if(req.body.twelvePM != null) {
                time_array.push({population:parseInt(req.body.twelvePM), time:12});

                if(isNaN(twelvePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 12PM', type:'internal'});
                }
        }

        if(req.body.onePM != null) {
                time_array.push({population:parseInt(req.body.onePM), time:13});

                if(isNaN(onePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 1PM', type:'internal'});
                }
        }

        if(req.body.twoPM != null) {
                time_array.push({population:parseInt(req.body.twoPM), time:14});

                if(isNaN(twoPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 2PM', type:'internal'});
                }
        }

        if(req.body.threePM != null) {
                time_array.push({population:parseInt(req.body.threePM), time:15});

                if(isNaN(threePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 3PM', type:'internal'});
                }
        }

        if(req.body.fourPM != null) {
                time_array.push({population:parseInt(req.body.fourPM), time:16});

                if(isNaN(fourPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 4PM', type:'internal'});
                }
        }

        if(req.body.fivePM != null) {
                time_array.push({population:parseInt(req.body.fivePM), time:17});

                if(isNaN(fivePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 5PM', type:'internal'});
                }
        }

        if(req.body.sixPM != null) {
                time_array.push({population:parseInt(req.body.sixPM), time:18});

                if(isNaN(sixPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 6PM', type:'internal'});
                }
        }

        if(req.body.sevenPM != null) {
                time_array.push({population:parseInt(req.body.sevenPM), time:19});

                if(isNaN(sevenPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 7PM', type:'internal'});
                }
        }

        if(req.body.eightPM != null) {
                time_array.push({population:parseInt(req.body.eightPM), time:20});

                if(isNaN(eightPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 8PM', type:'internal'});
                }
        }

        if(req.body.ninePM != null) {
                time_array.push({population:parseInt(req.body.ninePM), time:21});

                if(isNaN(ninePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 9PM', type:'internal'});
                }
        }

        if(req.body.tenPM != null) {
                time_array.push({population:parseInt(req.body.tenPM), time:22});

                if(isNaN(tenPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 10PM', type:'internal'});
                }
        }

        if(req.body.elevenPM != null) {
                time_array.push({population:parseInt(req.body.elevenPM), time:23});

                if(isNaN(elevenPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 11PM', type:'internal'});
                }
        }

        if(req.body.twelveAM != null) {
                time_array.push({population:parseInt(req.body.twelveAM), time:0});

                if(isNaN(twelveAM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 12AM', type:'internal'});
                }
        }

        if(req.body.oneAM != null) {
                time_array.push({population:parseInt(req.body.oneAM), time:1});

                if(isNaN(oneAM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 1AM', type:'internal'});
                }
        }

        var toInsert = {
                "location": loc,
		"day": day,
		"times": time_array
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
                                        res.send("Thanks for your submission!");
                                }
                        });
                }
        });
});

app.listen(process.env.PORT || 8888);
