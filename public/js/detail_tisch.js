window.onload = function () {
var date = new Date();
var day = date.getDay();
var hour = date.getHours();
var options = {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "How Busy is it Usually?"
	},
	axisX:{
		title: "Time of Day"
	},
	axisY: {
		title: "Percentage"
	},
  backgroundColor: null,
	data: [{
		type: "line",
		markerType: "square",
		color: "palevioletred"
	}]
};

//weekdays
if (day >= 1 && day <= 4) {

	//if overflow from sunday
        if(day == 1 && hour >= 0 && hour <= 6) {
 			options["data"][0]["dataPoints"] = [
			      { label: "10AM", y: 16  },
			      { label: "11AM",  y: 25  },
			      { label: "12PM",  y: 40 },
			      { label: "1PM",  y: 45  },
			      { label: "2PM", y: 50  },
			      { label: "3PM", y: 52  },
			      { label: "4PM",  y: 50  },
			      { label: "5PM",  y: 50  },
			      { label: "6PM",  y: 45 },
			      { label: "7PM",  y: 38  },
			      { label: "9PM", y: 30 },
			      { label: "10PM", y: 20 },
			      { label: "11PM", y: 10 },
			      { label: "12AM", y: 10 },
			      { label: "1AM", y: 10 }
					];
        }
        else {
        	options["data"][0]["dataPoints"] = [

			      { label: "8AM",  y: 10  },
			      { label: "9AM", y: 15  },
			      { label: "10AM", y: 21 },
			      { label: "11AM",  y: 32  },
			      { label: "12PM",  y: 40 },
			      { label: "1PM",  y: 45  },
			      { label: "2PM", y: 48  },
			      { label: "3PM", y: 50 },
			      { label: "4PM",  y: 53  },
			      { label: "5PM",  y: 55  },
			      { label: "6PM",  y: 56 },
			      { label: "7PM",  y: 57  },
			      { label: "8PM", y: 56 },
			      { label: "9PM", y: 47  },
			      { label: "10PM", y: 60  },
			      { label: "11PM", y: 31  },
			      { label: "12AM", y: 20 },
			      { label: "1AM", y: 10  },
					];

      	}
}

//sunday
else if (day == 0) {

	//overflow from saturday
	if (hour >= 0 && hour <= 6) {
        options["data"][0]["dataPoints"] = [
			      { label: "10AM", y: 0  },
			      { label: "11AM",  y: 10  },
			      { label: "12PM",  y: 15  },
			      { label: "1PM",  y: 20  },
			      { label: "2PM", y: 30  },
			      { label: "3PM", y: 34  },
			      { label: "4PM",  y: 40  },
			      { label: "5PM",  y: 45  },
			      { label: "6PM",  y: 55  },
			      { label: "7PM",  y: 54  },
			      { label: "8PM", y: 38  },
			      { label: "9PM", y: 35  },
			      { label: "10PM", y: 35  },
					]
      }
      else {
	      options["data"][0]["dataPoints"] = [
		      { label: "10AM", y: 16  },
		      { label: "11AM",  y: 25  },
		      { label: "12PM",  y: 40 },
		      { label: "1PM",  y: 45  },
		      { label: "2PM", y: 50  },
		      { label: "3PM", y: 52  },
		      { label: "4PM",  y: 50  },
		      { label: "5PM",  y: 50  },
		      { label: "6PM",  y: 45 },
		      { label: "7PM",  y: 38  },
		      { label: "9PM", y: 30 },
		      { label: "10PM", y: 20 },
		      { label: "11PM", y: 10 },
		      { label: "12AM", y: 10 },
		      { label: "1AM", y: 10 }
				];
      }
}

//saturday
else if (day == 6){

	//overflow from friday
	if (hour >= 0 && hour <= 6) {
		options["data"][0]["dataPoints"] = [

				{ label: "8AM",  y: 5  },
				{ label: "9AM", y: 8  },
				{ label: "10AM", y: 10 },
				{ label: "11AM",  y: 14  },
				{ label: "12PM",  y: 14  },
				{ label: "1PM",  y: 15  },
				{ label: "2PM", y: 15  },
				{ label: "3PM", y: 18  },
				{ label: "4PM",  y: 22  },
				{ label: "5PM",  y: 26  },
				{ label: "6PM",  y: 30  },
				{ label: "7PM",  y: 34  },
				{ label: "8PM", y: 38 },
				{ label: "9PM", y: 35 }
			      ]
	}

	else {
		options["data"][0]["dataPoints"] = [
				      { label: "10AM", y: 0  },
				      { label: "11AM",  y: 10  },
				      { label: "12PM",  y: 15  },
				      { label: "1PM",  y: 20  },
				      { label: "2PM", y: 30  },
				      { label: "3PM", y: 34  },
				      { label: "4PM",  y: 40  },
				      { label: "5PM",  y: 45  },
				      { label: "6PM",  y: 55  },
				      { label: "7PM",  y: 54  },
				      { label: "8PM", y: 38  },
				      { label: "9PM", y: 35  },
				      { label: "10PM", y: 35  },
						]
      	}
}

//friday
else {

	//overflow from MTWTh
	if (hour >= 0 && hour <= 6) {
		options["data"][0]["dataPoints"] = [
			{ label: "10AM", y: 16  },
  		      { label: "11AM",  y: 25  },
  		      { label: "12PM",  y: 40 },
  		      { label: "1PM",  y: 45  },
  		      { label: "2PM", y: 50  },
  		      { label: "3PM", y: 52  },
  		      { label: "4PM",  y: 50  },
  		      { label: "5PM",  y: 50  },
  		      { label: "6PM",  y: 45 },
  		      { label: "7PM",  y: 38  },
  		      { label: "9PM", y: 30 },
  		      { label: "10PM", y: 20 },
  		      { label: "11PM", y: 10 },
  		      { label: "12AM", y: 10 },
  		      { label: "1AM", y: 10 }
  				];
			}
	else {
		options["data"][0]["dataPoints"] = [

				{ label: "8AM",  y: 5  },
				{ label: "9AM", y: 8  },
				{ label: "10AM", y: 10 },
				{ label: "11AM",  y: 14  },
				{ label: "12PM",  y: 14  },
				{ label: "1PM",  y: 15  },
				{ label: "2PM", y: 15  },
				{ label: "3PM", y: 18  },
				{ label: "4PM",  y: 22  },
				{ label: "5PM",  y: 26  },
				{ label: "6PM",  y: 30  },
				{ label: "7PM",  y: 34  },
				{ label: "8PM", y: 38 },
				{ label: "9PM", y: 35 }
			      ]
	}

}


$("#chartContainer").CanvasJSChart(options);
}
