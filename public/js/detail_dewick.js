window.onload = function () {
var date = new Date();
var day = date.getDay();
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

if (day >= 1 && day <= 5) {

        //monday & wednesday
        if(day == 1 || day == 3) {
 			options["data"][0]["dataPoints"] = [
 				  { label: "7AM",  y: 5  },
			      { label: "8AM",  y: 20  },
			      { label: "9AM", y: 20  },
			      { label: "10AM", y: 40  },
			      { label: "11AM",  y: 50  },
			      { label: "12PM",  y: 90  },
			      { label: "1PM",  y: 60  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 40  },
			      { label: "4PM",  y: 30  },
			      { label: "5PM",  y: 30  },
			      { label: "6PM",  y: 55  },
			      { label: "7PM",  y: 70  },
			      { label: "8PM", y: 40  },
                              { label: "9PM", y: 0  }
					];
        }

        //tuesday & thursday
        else if (day == 2 || day == 4){
        	options["data"][0]["dataPoints"] = [
 				  { label: "7AM",  y: 5  },
			      { label: "8AM",  y: 20  },
			      { label: "9AM", y: 20  },
			      { label: "10AM", y: 40  },
			      { label: "11AM",  y: 50  },
			      { label: "12PM",  y: 60  },
			      { label: "1PM",  y: 50  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 30  },
			      { label: "4PM",  y: 20  },
			      { label: "5PM",  y: 40  },
			      { label: "6PM",  y: 55  },
			      { label: "7PM",  y: 70  },
			      { label: "8PM", y: 30  },
                              { label: "9PM", y: 0  }
					];

      	}
        //friday
        else {
                options["data"][0]["dataPoints"] = [
                        { label: "7AM",  y: 5  },
                        { label: "8AM",  y: 20  },
                        { label: "9AM", y: 20  },
                        { label: "10AM", y: 40  },
                        { label: "11AM",  y: 50  },
                        { label: "12PM",  y: 60  },
                        { label: "1PM",  y: 50  },
                        { label: "2PM", y: 40  },
                        { label: "3PM", y: 30  },
                        { label: "4PM",  y: 20  },
                        { label: "5PM",  y: 40  },
                        { label: "6PM",  y: 55  },
                        { label: "7PM",  y: 60  },
                        { label: "8PM", y: 0  }
                                                ];
        }
}
else if (day == 0) {
        options["data"][0]["dataPoints"] = [
                        { label: "8AM",  y: 10  },
                        { label: "9AM", y: 10  },
                        { label: "10AM", y: 15  },
			      { label: "11AM",  y: 50  },
			      { label: "12PM",  y: 50  },
			      { label: "1PM",  y: 60  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 20  },
			      { label: "5PM",  y: 20  },
			      { label: "6PM",  y: 40  },
			      { label: "7PM",  y: 60  },
			      { label: "8PM", y: 0  }
					]
      }
else {
        options["data"][0]["dataPoints"] = [
			      { label: "11AM",  y: 40  },
			      { label: "12PM",  y: 50  },
			      { label: "1PM",  y: 50  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 20  },
			      { label: "5PM",  y: 20  },
			      { label: "6PM",  y: 50  },
			      { label: "7PM",  y: 70  },
			      { label: "8PM", y: 40 },
			      { label: "9PM", y: 0  }
					]
      }

$("#chartContainer").CanvasJSChart(options);
}
