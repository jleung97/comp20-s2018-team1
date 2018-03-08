# Busy Monitor #

## Problem Statement ##

We want to give people the opportunity to know what places on Tufts campus (i.e. dining halls, Tisch, and Eaton Lab) are currently busy or quiet from wherever they are. This will save student's time and energy.

## How to solve the problem ##

* There are multiple ways we plan to approach this problem
* Measuring network traffic.
* Potential complications: 
	* we need to catalogue the router number for each building that we are interested in tracking; specifically for Carm, it may be hard to distinguish between people in the dining hall vs. people in the residential area; 
	* some people may use no internet device(s), while others may use multiple devices
* Staff members count the numbers of people in a building (mainly libraries and labs)
	* Create simple software that would allow staff to upload that data to us
	* Potential complications:
		* reliance on human element
		* numbers often boosted by 5-6 people
* Count swipe ins
	* Potential complications:
		* How do you know how quickly people leave?
		* Will we be granted access to that information?
* Use google’s busy API
	* https://github.com/m-wrzr/populartimes
	* https://developers.google.com/places/web-service/details 
	* API key: AIzaSyD4KQ9LKeL77hJKLUY-RCbnCAXM4i4RK3Q

## List of features ##
* GPS Location
* Network bandwidth measurement
* Online submission form

## Data Used and Collected ##
* Network approach:
	* How many unique IPs are on the network right now at each location?
	* Measure total bandwidth when busy and not busy
* Staff upload approach:
	* How many people are currently in the building? (Collected every half hour / hour)
* Swipes:
	* How many people swiped in in the last hour?
	* Approximately how long do people stay in the dining hall for?
* Google’s busy API:

* All:
	* How many people are at location x?
	* What is the capacity of location x?
	* When are usually the busiest times? The least busiest times?
	* How busy is it right now?
	* Hours of operation

## Algorithms and Special Technique ##
* Create thresholds for separate classifications of how busy a place is
* Then compare current status to the thresholds

## Wireframes ##

![alt_text](Secondary_Homepage_1)


