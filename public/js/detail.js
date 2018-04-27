window.onload = function () {
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
			title: "Number of People"
		},
	  backgroundColor: null,
		data: [{
			type: "line",
			markerType: "square",
			color: "palevioletred",
			dataPoints: [
	      { label: "8AM",  y: 40  },
	      { label: "9AM", y: 50  },
	      { label: "10AM", y: 65  },
	      { label: "11AM",  y: 55  },
	      { label: "12PM",  y: 100  },
	      { label: "1PM",  y: 135  },
	      { label: "2PM", y: 110  },
	      { label: "3PM", y: 60  },
	      { label: "4PM",  y: 30  },
	      { label: "5PM",  y: 70  },
	      { label: "6PM",  y: 120  },
	      { label: "7PM",  y: 140  },
	      { label: "8PM", y: 85  },
	      { label: "9PM", y: 45  }
			]
		}]
	};
	$("#chartContainer").CanvasJSChart(options);
}
