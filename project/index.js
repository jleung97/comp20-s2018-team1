// Using this code may violate clause 10.1(b) of Google ToS, so beware.

// No access to APIs or Content except through the Service. You will not access the Maps API(s) or the Content except through the Service. For example, you must not access map tiles or imagery through interfaces or channels (including undocumented Google interfaces) other than the Maps API(s).


const express = require('express');
const busy_hours = require('busy-hours');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

 
busy_hours("ChIJeSeaAt5244kRnRs0fPtKvz4", process.env.APIKEY
).then(data => {
	console.log("HELLO")
    do_something_with(data); 
 });

function do_something_with(data){
	console.log(data);
	express().post('/', function(request, response) {
			console.log("HELLO")
			response.send(data);
		})
		// .use(function(req, res, next) {
		// console.log("HELLO")
		//   res.header("Access-Control-Allow-Origin", "*");
		//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		//   next();
		//   console.log("HELLO")
		// })
		
}

express().listen(PORT, () => console.log(`Listening on ${ PORT }`))


// Using this code may violate clause 10.1(b) of Google ToS, so beware.

// No access to APIs or Content except through the Service. You will not access the Maps API(s) or the Content except through the Service. For example, you must not access map tiles or imagery through interfaces or channels (including undocumented Google interfaces) other than the Maps API(s).


// const express = require('express')
// const busy_hours = require('busy-hours')
// const PORT = process.env.PORT || 5000

 
// console.log("HELLO0");

// busy_hours("ChIJeSeaAt5244kRnRs0fPtKvz4", "AIzaSyCqJ1aIHlh_V0jU3p0O69BSBKNMRrcoIQE"
// ).then(data => {
// 	console.log("HELLO1");
//     do_something_with(data); 
//  });
// console.log("HELLO2");

//  express().listen(PORT, () => console.log(`Listening on ${ PORT }`))

// function do_something_with(data){
// 	express()
// 	// .get('/', function (request, response) {
// 	//   response.set('Content-Type', 'text/html');
// 	//   response.send('<p>Hey, it works!</p>');
// 	// })
// 		.use(function(req, res, next) {
// 		  res.header("Access-Control-Allow-Origin", "*");
// 		  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 		  next();
// 		  console.log("HELLO")

// 		})
// 		.post('/', function(request, response) {
// 			console.log("HELLO")
// 			response.send(data);
// 		})
	
// }

