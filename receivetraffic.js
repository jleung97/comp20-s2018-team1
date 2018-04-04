//copied from simpleposting app.js example
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/eaton_submit", function(req, res) {
        response.setHeader("Access-Control-Allow-Origin", "*", false);
        
        console.log("submitting " + req.body);


        //there has to be a way to make this more modular--any suggestions???
        if(req.body.tenAM != null) {
                var tenAM = parseInt(req.body.tenAM);

                if(isNaN(tenAM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 10AM', type:'internal'});
                }
        }

        if(req.body.elevenAM != null) {
                var elevenAM = parseInt(req.body.elevenAM);

                if(isNaN(elevenAM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 11AM', type:'internal'});
                }
        }

        if(req.body.twelvePM != null) {
                var twelvePM = parseInt(req.body.twelvePM);

                if(isNaN(twelvePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 12PM', type:'internal'});
                }
        }

        if(req.body.onePM != null) {
                var onePM = parseInt(req.body.onePM);

                if(isNaN(onePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 1PM', type:'internal'});
                }
        }

        if(req.body.twoPM != null) {
                var twoPM = parseInt(req.body.twoPM);

                if(isNaN(twoPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 2PM', type:'internal'});
                }
        }

        if(req.body.threePM != null) {
                var threePM = parseInt(req.body.threePM);

                if(isNaN(threePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 3PM', type:'internal'});
                }
        }

        if(req.body.fourPM != null) {
                var fourPM = parseInt(req.body.fourPM);

                if(isNaN(fourPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 4PM', type:'internal'});
                }
        }

        if(req.body.fivePM != null) {
                var fivePM = parseInt(req.body.fivePM);

                if(isNaN(fivePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 5PM', type:'internal'});
                }
        }

        if(req.body.sixPM != null) {
                var sixPM = parseInt(req.body.sixPM);

                if(isNaN(sixPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 6PM', type:'internal'});
                }
        }

        if(req.body.sevenPM != null) {
                var sevenPM = parseInt(req.body.sevenPM);

                if(isNaN(sevenPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 7PM', type:'internal'});
                }
        }

        if(req.body.eightPM != null) {
                var eightPM = parseInt(req.body.eightPM);

                if(isNaN(eightPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 8PM', type:'internal'});
                }
        }

        if(req.body.ninePM != null) {
                var ninePM = parseInt(req.body.ninePM);

                if(isNaN(ninePM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 9PM', type:'internal'});
                }
        }

        if(req.body.tenPM != null) {
                var tenPM = parseInt(req.body.tenPM);

                if(isNaN(tenPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 10PM', type:'internal'});
                }
        }

        if(req.body.elevenPM != null) {
                var elevenPM = parseInt(req.body.elevenPM);

                if(isNaN(elevenPM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 11PM', type:'internal'});
                }
        }

        if(req.body.twelveAM != null) {
                var twelveAM = parseInt(req.body.twelveAM);

                if(isNaN(twelveAM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 12AM', type:'internal'});
                }
        }

        if(req.body.oneAM != null) {
                var oneAM = parseInt(req.body.oneAM);

                if(isNaN(oneAM)) {
                        res.send(400, {status:400, message: 'Incorrect parameter for 1AM', type:'internal'});
                }
        }

        //LATER: create database to store values in

        res.send(<html><head><h2>Thanks for your submission!</h2></head></html>);
});

app.listen(process.env.PORT || 8888);
