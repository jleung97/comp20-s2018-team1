//const express = require('express')
const busy_hours = require('busy-hours')
const PORT = process.env.PORT || 5000

 
busy_hours(ChIJhzu3ved244kRYQtpJQpwSkg, AIzaSyCqJ1aIHlh_V0jU3p0O69BSBKNMRrcoIQE
).then(data => {
    do_something_with(data); 
 });

function do_something_with(data){
	console.log(data);
}