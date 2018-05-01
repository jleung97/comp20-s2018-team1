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
    if(day == 5) {
      options["data"][0]["dataPoints"] = [
      			  { label: "12AM",  y: 20  },
      			  { label: "1AM",  y: 20  },
      			  { label: "2AM",  y: 15  },
      			  { label: "3AM",  y: 15  },
      			  { label: "4AM",  y: 10  },
			      { label: "9AM", y: 10  },
			      { label: "10AM", y: 30  },
			      { label: "11AM",  y: 50  },
			      { label: "12PM",  y: 60  },
			      { label: "1PM",  y: 50  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 20  },
			      { label: "5PM",  y: 20  },
			      { label: "6PM",  y: 55  },
			      { label: "7PM",  y: 70  },
			      { label: "8PM", y: 30  },
			      { label: "9PM", y: 50  },
			      { label: "10PM", y: 60  },
			      { label: "11PM", y: 30  }
					];
    }
    else {
     options["data"][0]["dataPoints"] = [
      			  { label: "12AM",  y: 20  },
      			  { label: "1AM",  y: 20  },
      			  { label: "2AM",  y: 15  },
      			  { label: "3AM",  y: 15  },
      			  { label: "4AM",  y: 10  },
			      { label: "9AM", y: 10  },
			      { label: "10AM", y: 20  },
			      { label: "11AM",  y: 40  },
			      { label: "12PM",  y: 60  },
			      { label: "1PM",  y: 50  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 30  },
			      { label: "5PM",  y: 20  },
			      { label: "6PM",  y:20  },
			      { label: "7PM",  y: 10  },
			      { label: "8PM", y: 10  }
					];
    }
}
else if (day == 0) {
	options["data"][0]["dataPoints"] = [
			      { label: "10AM", y: 10  },
			      { label: "11AM",  y: 20  },
			      { label: "12PM",  y: 40  },
			      { label: "1PM",  y: 60  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 20  },
			      { label: "4PM",  y: 10  },
			      { label: "5PM",  y: 10  }
					];
}
else {
	options["data"][0]["dataPoints"] = [
			      { label: "12PM",  y: 20  },
			      { label: "1PM",  y: 40  },
			      { label: "2PM", y: 40  },
			      { label: "3PM", y: 50  },
			      { label: "4PM",  y: 40  },
			      { label: "5PM",  y: 30  },
			      { label: "6PM",  y: 50  },
			      { label: "7PM",  y: 70  },
			      { label: "8PM", y: 30  },
			      { label: "9PM", y: 40  },
			      { label: "10PM", y: 50  },
			      { label: "11PM", y: 30  },
			      { label: "11PM", y: 20  }
					];
}



$("#chartContainer").CanvasJSChart(options);
}
