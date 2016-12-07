var Twit = require('twit')
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var jsonfile = require('jsonfile');


var file = 'geohistory.json';
var countfile = 'counthistory.json';
//var geo_history = jsonfile.readFileSync(file);
var count_history = {};
count_history.tweets = [];
count_history.incount = 75000;
count_history.outcount = 250000;


try {
  console.log("entering try block");
  var geo_history = jsonfile.readFileSync(file);
  console.log("We read the file!!!!!");
}
catch (e) {
  console.log("entering catch block");
  console.log(e);
  console.log("leaving catch block");
}

/*
try {
  console.log("entering try block");
    count_history = jsonfile.readFileSync(countfile);
  console.log("We read the file!!!!!");
}
catch (e) {
  console.log("entering catch block");
  console.log(e);
  console.log("leaving catch block");
}
*/
app.listen(3700);

function handler (req, res) {
    res.writeHead(200);
    res.end("");
}
////////Replace with your own API key
var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
});

var twitD = {};
var uk = [ '48.7', '9.7', '60', '10.5' ];
var incount = 75000;
var outcount = 250000;

//###################################
//If you want to use the search API (REST) then you can use this! line below, 
//In order to get data, you need to periodically pull data. Create an interval timer!
// T.get('search/tweets', { q: '#datascience', count: 100 }, function(err, data, response) {
//   //console.log(data)
// });stay-tweets


//######################
//Here you can either use a random sample, or search for something specific!
//var stream = T.stream('statuses/sample');
var stream = T.stream('statuses/filter', { track: ['strongerin', 'brexit','voteremain','voteout','votein','bremain','beleave'] });
//var stream = T.stream('statuses/filter', { locations: uk })
//var stream = T.stream('statuses/filter', { track: ['twitpic', 'http://img', 'img'] });

//##############################



//listen once connected
io.on('connection', function (socket) {

    socket.on('load_data_market', function(){
    
    var request = require("request")

    var url = "https://www.predictit.org/api/marketdata/ticker/BREXIT16";

    request({
        url: url,
        json: true
        }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
            io.emit("market_json", body);
            }
        })
    
    });
    
    
    
    socket.on('load_data', function () {
    
  		T.get('search/tweets', { q: '#strongerin OR #voteremain OR  #bremain OR #votein', count: 15}, function(err, data, response) {
		    console.log("#########STAY:###########");
			  //console.log("#########STAY: err ###########",err);
			   //console.log("#########STAY: response ###########",response);
		    io.emit("stay-tweets", data);
		});//stay-tweets
			
        T.get('search/tweets', { q: '#brexit OR #voteout OR  #britainout OR #beleave', count: 15}, function(err, data, response) {
	        console.log("#########Leave###########");
		    io.emit("leave-tweets", data);
		});//leave-tweets	
  		
  		
		});//load data first time
		
    //listen for map update - send out tweets from new map view
    socket.on('update_dis', function (newDis) {
        console.log("@@@@@@@@@@@@@@@@@@@dis updated:", newDis);
        twitD = newDis;
        var geo = twitD.lat + "," + twitD.lng + "," + twitD.dis+"mi";
        console.log("@@@@@@@@@@@@@@@@@@Geo:", geo);
        T.get('search/tweets', { q: '#strongerin OR #voteremain OR  #bremain OR #votein', count: 15, geocode: geo }, function(err, data, response) {
			   console.log("#########STAY: Inside ###########");
			   console.log("#########STAY: Inside err ###########",err);
			  // console.log("#########STAY: Inside response ###########",response);
			   io.emit("stay-tweets", data);
			});//stay-tweets
			
		T.get('search/tweets', { q: '#brexit OR #voteout OR  #britainout OR #beleave', count: 15, geocode: geo }, function(err, data, response) {
			   console.log("#########Leave: Inside ###########");
			   io.emit("leave-tweets", data);
			});//leave-tweets	
			
        //io.emit("set_filter_lang", language_filter);
    });
    
    
    
    
});



console.log("INFO: Got to the point where stream is about to emit to tweets");

/*
var stream_timer = setInterval(print_count, 200600000);
var print_index = 0;

function print_count()
{
     console.log("$$$$$$$$$$$$$$$$$$$ Print Count!!! ###########");
    jsonfile.writeFileSync("brexitTweet"+print_index+".json", count_history); 
    print_index++;
    count_history.tweets = [];
}*/

stream.on('tweet', function (tweet) {
        console.log("$$$$$$$$$$$$$$$$$$$ STREAM MAP: TEXT ###########", tweet.text);
  		//io.emit('tweets',tweet);
  		var mess = tweet.text;
  		//count_history.tweets.push(tweet);  
  		//'strongerin', 'brexit','voteremain','voteout','votein','bremain','beleave' 
  		if (mess.search(/brexit|voteout|beleave/i) != -1)
  		{
  		    outcount++;
  		    count_history.outcount++;
  		    console.log("OUT is now ",outcount);
  		    io.emit('out-count',outcount);
  		}
  		if (mess.search(/strongerin|voteremain|votein|bremain/i) != -1)
  		{
  		    incount++;
  		    count_history.incount++
  		     console.log("IN is now ",incount);
  		    io.emit('in-count',incount);
  		}
  		
  		
		});
		

/*
stream.on('tweet', function (tweet) {
  //console.log(tweet);
// emitMsg('tweets', tweet);
    	preProcessData(tweet);
   		 //io.emit('tweets',tweet);
        //io.emit('tweets',tweet);
});
*/

var timer = setInterval(mapcapture, 30000);

//#brexit OR #voteout OR  #britainout OR #strongerin
function maptweet(){
var geo = "55.3781,3.4360,874mi";
T.get('search/tweets', { q: '', count: 100, geocode: geo }, function(err, data, response) {
			   console.log("$$$$$$$$$$$$$$$$$$$ STREAM MAP: Inside ###########");
			   io.emit("tweets", data);
			});
}



function mapcapture(){
var geo = "55.3781,3.4360,450mi";
T.get('search/tweets', { q: '', count: 100, geocode: geo }, function(err, tweets, response) {
			   console.log("$$$$$$$$$$$$$$$$$$$ CAPTURE ###########");
			   io.emit("tweets", tweets);
			   
			   if (tweets["statuses"] != undefined){
			   for(var i=0; i<tweets["statuses"].length; i++) {
 			        var data = tweets["statuses"][i];
 			
                    if(data.geo != undefined){  
                    var lat =   data.geo.coordinates[0];
                    var lng =   data.geo.coordinates[1];
                    console.log("########Found LAT and LONG",lat,lng);
                    //console.log(lat,lng)
                    //var tweetLocation = new google.maps.LatLng(lat, lng);
                    //liveTweetsPos.push({location: tweetLocation, weight: 15});
                    geo_history.push(data);      
                    } 
                    
                    
                }//forloop
                jsonfile.writeFileSync(file, geo_history);
                console.log("$$$$$$$$$$$$$$$$$$$ CAPTURE WRITE FILE###########");
                }
                
			});
}


console.log("at the end!!!");
//In this function we want to do some pre-processing of the incomming data stream
function preProcessData(tweet) {
    var dataParsed = false;
    var minTweetCharLen = 3;
    //How about a simple check for the length of the tweet
    if((tweet.text).length > minTweetCharLen){
        console.log('pre-processing info: Tweet Length is:'+ (tweet.text).length);
        
        //we're now happy, if so, let's make it to send the tweet off
        dataParsed = true;
    }else{
    	//console.log('Did not meet requirement')
    }
    
    if(dataParsed){
        io.emit('tweets',tweet);
    }else{
        //Do something else,
        //If data is neeeded, then could let the front end know?
    }
      
}
