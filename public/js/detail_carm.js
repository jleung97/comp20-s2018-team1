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
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 20  },
			      { label: "5PM",  y: 20  },
			      { label: "6PM",  y: 55  },
			      { label: "7PM",  y: 70  },
			      { label: "8PM", y: 0  }
					];
        }
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
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 20  },
			      { label: "5PM",  y: 20  },
			      { label: "6PM",  y: 55  },
			      { label: "7PM",  y: 70  },
			      { label: "8PM", y: 0  }
					];

      	}
}
else if (day == 0) {
        options["data"][0]["dataPoints"] = [
			      { label: "8AM",  y: 5  },
			      { label: "9AM", y: 20  },
			      { label: "10AM", y: 30  },
			      { label: "11AM",  y: 40  },
			      { label: "12PM",  y: 50  },
			      { label: "1PM",  y: 50  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 20  },
			      { label: "5PM",  y: 20  },
			      { label: "6PM",  y: 50  },
			      { label: "7PM",  y: 70  },
			      { label: "8PM", y: 0  }
					]
      }
else {
        options["data"][0]["dataPoints"] = [
			      { label: "11AM",  y: 50  },
			      { label: "12PM",  y: 50  },
			      { label: "1PM",  y: 60  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 20  },
			      { label: "5PM",  y: 20  },
			      { label: "6PM",  y: 40  },
			      { label: "7PM",  y: 60  },
			      { label: "8PM", y: 50 },
			      { label: "9PM", y: 0  }
					]
      }

$("#chartContainer").CanvasJSChart(options);
}
