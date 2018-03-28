# How to get unique ip address #

## Solution1: arp-scan ##
* If you do not have it do this:
```
brew install arp-scan
```

> OR

```
pip install arp-scan
```

> If both do not work, look up online

* Once you have installed the software, run arp-scan on local network:

```
sudo arp-scan -l
```

* At the end, there will be a description of the results

![arp-scan_results](arp-scan_results.png)

It will display who responded to our arp-scan and most likely a good estimate 
of the number of unique ip addresses on the current network.

[References](http://www.howtoeverything.net/linux/console-tricks/find-all-ips-and-mac-addresses-network)

## Google API? ##

* As of now, there is no publically available Google API that gives out the popular times
* There is a github repo that could be used to scrape data from Google:
[Popular Time](https://github.com/m-wrzr/populartimes)
buttttt, most likely a violation against Google's policies

## Solution 2: busy-hours (as long as it is not against Google's policies) ##

* There is an npm package that can scape Google's Places popular time data called [hours](https://www.npmjs.com/package/busy-hours)
* All you need is a place_id and an api key for Google Places API

```javascript
const busy_hours = require('busy-hours');
 
busy_hours(place_id, key).then(data => {
    do_something_with(data); 
 });
 ```

 * The response variable "data" is in JSON:

 ```JSON
 {
    week: [
    {
        day: 'mon',
        hours: [
            { 
              hour: '06',
              percentage: 21,
            }, { 
              hour: '07',
              percentage: 37,
            } ...
        ]} ...
    ],
    now: { 
        hour: '12',
        percentage: 30,
      }
}
```

* Seems like a safer option than the github repo
