var dining_container = document.getElementById('dining_info');
var request = new XMLHttpRequest();
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getFullYear();
var url = 'https://tuftsdiningdata.herokuapp.com/rmenus/dewick/' + day + '/' + month + '/' + year;
var menu = ''

request.open("GET", url, true);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.onreadystatechange = function() {
	if (request.readyState == 4 && request.status == 200) {
		response = request.responseText;
		response = JSON.parse(response)['data'];
		var meals = ['Breakfast', 'Lunch', 'Dinner'];
		for (i = 0; i < meals.length; i++) {
			meal = meals[i];
			menu += '<p class="meal">' + meal.toUpperCase() + '</p>';
			for (category in response[meal]) {
				menu += '<span class="category">' + toTitleCase(category) + '</span><ul>';
				for (food in response[meal][category]) {
					menu += '<li class="food">' + response[meal][category][food] + '</li>';
				}
				menu += '</ul>';
			} 
		}
		dining_container.innerHTML = menu;
	}
}
request.send();

//https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


