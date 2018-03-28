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

![References](http://www.howtoeverything.net/linux/console-tricks/find-all-ips-and-mac-addresses-network)

## Google API? ##

* As of now, there is no publically available Google API that gives out the popular times
* There is a github repo that could be used to scrape data from Google:
![Popular Time](https://github.com/m-wrzr/populartimes)
> buttttt, most likely a violation against Google's policies
