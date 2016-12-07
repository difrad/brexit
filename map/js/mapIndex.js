function getUrlParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}  

function printObject(o) {
  var out = '';
  for (var p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  return out;
}


function getNeighbourhoods() {

    //var results = ['ALDERSHOT-NORTH.kml','ALDERSHOT-SOUTH.kml','ALTON-RURAL.kml','ALTON.kml','ANDOVER-EAST.kml','ANDOVER-NORTH.kml','ANDOVER-SOUTH.kml','ANDOVER-TOWN.kml','BARGATE.kml','BARNCROFT-AND-BEDHAMPTON.kml','BASINGSTOKE-CENTRE.kml','BASINGSTOKE-EAST.kml','BASINGSTOKE-NORTH.kml','BASINGSTOKE-RURAL-EAST.kml','BASINGSTOKE-RURAL-SOUTH.kml','BASINGSTOKE-RURAL-WEST.kml','BASINGSTOKE-SOUTH.kml','BASINGSTOKE-WEST.kml','BATTINS-AND-WEST-LEIGH.kml','BEVOIS.kml','BISHOPS-WALTHAM-AND-SOBERTON.kml','BITTERNE-NORTH.kml','BORDON.kml','BUTSER-AND-CLANFIELD-AND-ROWLANDS-CASTLE.kml','BUTSER_CLANFIELD_ROWLANDS-CASTLE.kml','CENTRAL-SOUTHSEA-AND-ST-JUDES.kml','CHARLES-DICKENS-AND-NELSON.kml','COSHAM.kml','COWES.kml','COXFORD-AND-REDBRIDGE-AND-MILLBROOK.kml','COXFORD_REDBRIDGE_MILLBROOK.kml','CROFTON-AND-TITCHFIELD.kml','DENMEAD-AND-SOUTHWICK.kml','EAST-COWES-AND-WOOTTON.kml','EASTLEIGH-CENTRAL.kml','EASTLEIGH-EAST.kml','EASTLEIGH-WEST.kml','EASTNEY-AND-MILTON.kml','FAREHAM.kml','FARNBOROUGH-CENTRAL.kml','FARNBOROUGH-NORTH.kml','FARNBOROUGH-SOUTH.kml','FARNBOROUGH-WEST.kml','FLEET.kml','FOUR-MARKS-AND-ROPLEY.kml','FRATTON-AND-BAFFINS.kml','GOSPORT-CENTRAL.kml','GOSPORT-EAST.kml','GOSPORT-WEST.kml','HART-RURAL-NORTH.kml','HART-RURAL-SOUTH.kml','HAVANT-AND-EMSWORTH.kml','HAYLING-ISLAND.kml','HEDGE-END-NORTH.kml','HEDGE-END-SOUTH.kml','HILSEA-AND-COPNOR.kml','HORNDEAN.kml','HYTHE.kml','LEE.kml','LISS.kml','LONGMOOR-RURAL.kml','LYMINGTON.kml','NEW-FOREST-HEART.kml','NEW-MILTON.kml','NEWPORT.kml','OWSLEBURY-AND-CURDRIDGE.kml','PAULSGROVE.kml','PEARTREE-AND-WOOLSTON.kml','PETERSFIELD.kml','PORTCHESTER.kml','PORTSWOOD.kml','RINGWOOD.kml','ROMSEY-EAST.kml','ROMSEY-NORTH.kml','ROMSEY-TOWN.kml','RYDE.kml','SANDOWN-AND-LAKE.kml','SHANKLIN-AND-VENTNOR.kml','SHIRLEY-AND-FREEMANTLE.kml','SHOLING-AND-BITTERNE.kml','ST-THOMAS.kml','TOTTON.kml','WATERLOOVILLE-NORTH.kml','WATERLOOVILLE-SOUTH.kml','WEST-MEON-AND-HAMBLEDON.kml','WESTERN-WARDS.kml','WICKHAM-AND-WHITELEY.kml','WIGHT-RURAL-EAST.kml','WIGHT-RURAL-SOUTH.kml','WIGHT-RURAL-WEST.kml','WINCHESTER-CENTRAL.kml','WINCHESTER-NORTH.kml','WINCHESTER-RURAL-EAST.kml','WINCHESTER-RURAL-NORTH.kml','WINCHESTER-RURAL-WEST.kml','WINCHESTER-SOUTH.kml','YATELEY-AND-BLACKWATER-AND-HAWLEY.kml','YATELEY_BLACKWATER-AND-HAWLEY.kml']
    var results = ['WINCHESTER-CENTRAL.kml','WINCHESTER-NORTH.kml','WINCHESTER-RURAL-EAST.kml','WINCHESTER-RURAL-NORTH.kml','WINCHESTER-RURAL-WEST.kml','WINCHESTER-SOUTH.kml','YATELEY-AND-BLACKWATER-AND-HAWLEY.kml','YATELEY_BLACKWATER-AND-HAWLEY.kml'];
    //var results = ['PEARTREE-AND-WOOLSTON.kml','PETERSFIELD.kml','PORTCHESTER.kml','PORTSWOOD.kml','RINGWOOD.kml','ROMSEY-EAST.kml','ROMSEY-NORTH.kml','ROMSEY-TOWN.kml','RYDE.kml','SANDOWN-AND-LAKE.kml','SHANKLIN-AND-VENTNOR.kml','SHIRLEY-AND-FREEMANTLE.kml','SHOLING-AND-BITTERNE.kml','ST-THOMAS.kml','TOTTON.kml','WATERLOOVILLE-NORTH.kml','WATERLOOVILLE-SOUTH.kml','WEST-MEON-AND-HAMBLEDON.kml','WESTERN-WARDS.kml','WICKHAM-AND-WHITELEY.kml','WIGHT-RURAL-EAST.kml','WIGHT-RURAL-SOUTH.kml','WIGHT-RURAL-WEST.kml','WINCHESTER-CENTRAL.kml','WINCHESTER-NORTH.kml','WINCHESTER-RURAL-EAST.kml','WINCHESTER-RURAL-NORTH.kml','WINCHESTER-RURAL-WEST.kml','WINCHESTER-SOUTH.kml','YATELEY-AND-BLACKWATER-AND-HAWLEY.kml','YATELEY_BLACKWATER-AND-HAWLEY.kml'];
    return results;

};


function getDistricts(){
   var results = ['EAST-HANTS.kml','BASINGSTOKE.kml','EASTLEIGH.kml','FAREHAM.kml','GOSPORT.kml','HART.kml','HAVANT.kml','ISLE-OF-WIGHT.kml','NEW-FOREST.kml','PORTSMOUTH.kml','RUSHMOOR.kml','SOUTHAMPTON.kml','TEST-VALLEY.kml','WINCHESTER.kml']
   return results;
}


function initialize() {
  



      //init the histogram.
      //drawHisto()
      createLongestCascadeGraph();
      var tweetsAll = 78000000;
      var tweetsSoton = 0;
      var wikiAll = 0;
      var wikiSoton = 0;

      var counters= {};
      counters["tweetaAll"] = tweetsAll;
      counters["tweetsSoton"] = tweetsSoton;
      counters["wikiAll"] = wikiAll;
      counters["wikiSoton"] = wikiSoton;

      $("#tweet-count span").html(tweetsAll);
      $("#tweet-southampton-count span").html(tweetsSoton);
      $("#wikipedia-count span").html(wikiAll);
      $("#wikipedia-southampton-count span").html(wikiSoton);



  var myLatlng = new google.maps.LatLng(51.0895203,-1.216844); //hampshire
  
  var light_grey_style = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}];
  
  var midnight = [ { "featureType": "water", "stylers": [ { "color": "#021019" } ] }, { "featureType": "landscape", "stylers": [ { "color": "#08304b" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#0c4152" }, { "lightness": 5 } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#0b434f" }, { "lightness": 25 } ] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#0b3d51" }, { "lightness": 16 } ] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#000000" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" }, { "lightness": 13 } ] }, { "featureType": "transit", "stylers": [ { "color": "#146474" } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 } ] } ];

  var myOptions = {
    zoom: 10,
    scrollwheel: true, 
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    styles: light_grey_style
  };

  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  var kmlFiles = getDistricts();

  infowindow = new google.maps.InfoWindow({});
  
  myParser = new geoXML3.parser({
      map: map,
       infoWindow: false,
       singleInfoWindow: true,
       zoom: true,
       markerOptions: {optimized: false},
       afterParse: useTheData

  });



  var heatmapPos;

  var liveTweetsPos = new google.maps.MVCArray();
    heatmapPos = new google.maps.visualization.HeatmapLayer({
    data: liveTweetsPos,
    radius: 15
  });
    
  // var gradient = [
  //   'rgba(30,244,248,0)',
  //   'rgba(30,244,248,0.5)',
  //   'rgba(30,244,248,0.5)',
  //   'rgba(32,248,158,0.5)',
  //   'rgba(33,249,152,0.5)',
  //   'rgba(51,255,75,0.5)',
  //   'rgba(51,255,75,0.5)'
  // ]

    var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmapPos.set('gradient', heatmapPos.get('gradient') ? null : gradient);
  heatmapPos.setMap(map);




  //myParser.parse('http://socpub.cloudapp.net/hwo/kml/uk/hampshire/neighbourhood/TOTTON.kml');

  //var kmlFiles = getNeighbourhoods();

  

  var kmlLayers = {};
  var kmlLayerTweetCount = {}
  var kmlURLS = [];
  for(i=0; i<kmlFiles.length; i++){

      var url = "kml/uk/hampshire/districts/"+kmlFiles[i];
      var fullURL = "http://socpub.cloudapp.net/hwo/kml/uk/hampshire/districts/"+kmlFiles[i];
      kmlURLS.push(url);
      myParser.parse(url);


      var ctaLayer = new google.maps.KmlLayer({
         url: fullURL,
         map: map,
         preserveViewport: true
      });

      //ctaLayer.setMap(map);
      kmlLayers[kmlFiles[i].replace(".kml","")] = ctaLayer;

      //Also initilize the layer counter off.
      kmlLayerTweetCount[kmlFiles[i].replace(".kml","")]  = 0;

  }
    //hack
    kmlLayerTweetCount["wikipedia"]  = 0;
    console.log("trying to load KMLS: "+kmlURLS.length)

   
  
      //console.log("Default ViewPoint "+printObject(ctaLayer.defaultViewport.bounds()));
   
// for (var key in myParser) {

//     console.log("KML LAYERS ADDED ITEM: "+myParser[key]);
// }

  //console.log("KML LAYERS ADDED "+myParser);


var highlightOptions = {fillColor: "#FFFF00", strokeColor: "#000000", fillOpacity: 0.30, strokeWidth: 10};

var normalStyle = null;
    var polygonsAndTweets = [];

var polyTitleID = 1;
function useTheData(doc) {

  var currentBounds = map.getBounds();
  var distance = 0.3; // km
  var myLatlng = new google.maps.LatLng(51.0895203,-1.216844); //hampshire
  polygonsAndTweets = [];

  geoXmlDoc = doc[0];

         if (geoXmlDoc.gpolygons.length>0){ 
          for (var i=0; i<geoXmlDoc.gpolygons.length; i++) {
            //update title

            geoXmlDoc.gpolygons[i].title = polyTitleID;
            ++polyTitleID;
            var tweets = [];
            geoXmlDoc.gpolygons[i].tweets = tweets;
            var polygon = geoXmlDoc.gpolygons[i];
            //polygon.tweets = [];

            // //add to map
            //var polyTweets = [];
            polygonsAndTweets[i] = polygon;

            polygon.fillOpacity = .1;
            normalStyle = {
              strokeColor: polygon.get('strokeColor'),
              strokeWeight: polygon.get('strokeWeight'),
              strokeOpacity: polygon.get('strokeOpacity'),
              fillColor: polygon.get('fillColor'),
              fillOpacity: polygon.get('fillOpacity')
            };
            google.maps.event.addListener(polygon,"mouseover",function() {
              //console.log("mouseover");
              polygon.setOptions(highlightOptions);
            });
            google.maps.event.addListener(polygon,"mouseout",function() {
              //console.log("mouseout");
              polygon.setOptions(normalStyle);
            });
             google.maps.event.addListener(polygon,"click",function() {
              //console.log("mouseover");
              showPolygonTweets(polygon);
            });
            // if(geoXmlDoc.gpolygons[i].Contains(myLatlng)){
            //   geoXmlDoc.gpolygons[i].fillOpacity = .3;
            //alert(printObject(geoXmlDoc.gpolygons[i]));

            //   //console.log("MATCH with:"+(geoXmlDoc.gpolygons[i]));
            // }
          }
                  console.log("Polygons Added: "+polygonsAndTweets.length);

        }else{

        }
}

  //soton location

    var lon1 = -1.61;
    var lon2 = -1.23;
    var lat2 = 51.07;
    var lat1 = 50.85;



    ///SOCKET WORK


     var socket = io.connect('http://sociamvm-app-001.ecs.soton.ac.uk:9001');

    socket.on('twitter_uk_southampton', function (data) {
              tweetsSoton = tweetsSoton +1;
              counters["tweetsSoton"] = tweetsSoton;
              updateCounters(counters);
              addSouthamptonTwitterData(data);

    });

    // Storage for WebSocket connections
    var infoWindow;
    //var socket = io.connect('http://socpub.cloudapp.net:9999');
    var socket = io.connect('http://sociamvm-app-001.ecs.soton.ac.uk:9001');

    socket.on('spinn3r', function (data) {
        tweetsAll = tweetsAll + 1;
        counters["tweetsAll"] = tweetsAll;


        if(data.geo != undefined){
          // resetAllKML();   

          var lat =   data.geo.lat;
          var lng =   data.geo.lng;

            //console.log(lat,lng)
          var tweetLocation = new google.maps.LatLng(data.geo.lat, data.geo.lng);

            if((lat > lat1) && (lat < lat2)){

                if((lng > lon1) && (lng < lon2)){

                    liveTweetsPos.push({location: tweetLocation, weight: 15});
                      try{
                  if(isInfoWindowOpen(infoWindow)){
                    infoWindow.close()
                  }
                }catch(e){

                }
                //add a marker
                infoWindow = createInfoWindow(data.geo.lat, data.geo.lng, 3000, data)
                infoWindow.open(map); 

                

                }
          }

          //var tweetLocation = new google.maps.LatLng(data.geo.lat, data.geo.lng);
          //console.log("geo data: "+tweetLocation);
          //is the data within one of the kml files?
          for(var key in kmlLayers){
            //console.log("key: "+kmlLayers[key]); //+" Size: "+kmlLayers[key].Area())
            //alert(printObject(kmlLayers[key].defaultViewport.Contains(tweetLocation)));
            var layer = kmlLayers[key];
            try{
              if(layer.defaultViewport.contains(tweetLocation)){
                console.log("Tweet located in Area: "+key)
                //liveTweetsPos.push({location: tweetLocation, weight: 15});

                // try{
                //   if(isInfoWindowOpen(infoWindow)){
                //     infoWindow.close()
                //   }
                // }catch(e){

                // }
                //add a marker
                // infoWindow = createInfoWindow(data.geo.lat, data.geo.lng, 3000, data)
                // infoWindow.open(map); 
             ;


                //update the tweet list
                //updateTweetActivityList(data); //called in index.js
                
                //also add to tweet tally for area
                cnt = kmlLayerTweetCount[key]
                kmlLayerTweetCount[key] = cnt+1;

                 // for (var i=0; i<geoXmlDoc.gpolygons.length; i++) {
                 //  if(geoXmlDoc.gpolygons[i].contains(tweetLocation)){
                 //    geoXmlDoc.gpolygons[i].tweets.push(data);
                 //    }
                 //  }

                 
                //updatekmlview
                 for (var i=0; i<polygonsAndTweets.length; i++) {
                  //console.log(printObject(polygonsAndTweets[i]));
                  try{
                    if(polygonsAndTweets[i].Contains(tweetLocation)){
                         //key.setOptions(highlightOptions);
                        //now update the map
                          polygonsAndTweets[i].tweets.push(data);
                    }
                }catch(e){
                      console.log(e);
                  }
              }


            }else{
              //console.log("Tweet Outside Area: "+key)

            }
          }catch(e){
            //console.log("here: "+e);
          }

          }
        } 


        addRecentTweet(data);
        updateCounters(counters);

        updateHTML(kmlLayerTweetCount);
        //finally update the histo
        //updateHistoData(kmlLayerTweetCount);
    });
 //  //set the timer off to clear the KML's after data
 // var interval = setInterval(function(){clear_kml_opacity()}, 2000);







function createInfoWindow(tweet_lat, tweet_lng, timeout, data) {


    infoWindow = new google.maps.InfoWindow();
    var windowLatLng = new google.maps.LatLng(tweet_lat,tweet_lng);
    infoWindow.setOptions({
        content: data.text,
        position: windowLatLng,
        maxWidth: 200
    });
    //infoWindow.open(map); 
  
    //setTimeout(function(){infoWindow.close();}, '2000');

    return infoWindow;
 
}


function isInfoWindowOpen(infoWindow){
    var map = infoWindow.getMap();
    return (map !== null && typeof map !== "undefined");
}

var heatmapNeg;
  var liveTweetsNeg = new google.maps.MVCArray();
    heatmapNeg = new google.maps.visualization.HeatmapLayer({
    data: liveTweetsNeg,
    radius: 5
  });
//add Wikipedia to the Southampton Lesn
 var gradientNeg = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]

  heatmapNeg.set('gradient', heatmapNeg.get('gradient') ? null : gradientNeg);
  heatmapNeg.setMap(map);

    // Storage for WebSocket connections



    var socket2 = io.connect('http://sociamvm-app-001.ecs.soton.ac.uk:9001');
    socket2.on('wikipedia_revisions', function (data) {
  
        wikiAll = wikiAll + 1;
        counters["wikiAll"] = wikiAll;

   //console.log(data)
  //get geo wikipedia entries
        if(data.wikipedia_user.user_geo != undefined){

            var lat =   data.wikipedia_user.user_geo.lat;
            var lng =   data.wikipedia_user.user_geo.lng;

            //console.log(lat,lng)

            if((lat > lat1) && (lat < lat2)){

                if((lng > lon1) && (lng < lon2)){

                var tweetLocation = new google.maps.LatLng(data.wikipedia_user.user_geo.lat,data.wikipedia_user.user_geo.lng);
                liveTweetsNeg.push({location: tweetLocation, weight: (5)});
               // updateWikipediaActivityList(data);
               

                 wikiSoton = wikiSoton + 1;
                  counters["wikiSoton"] = wikiSoton;

                try{
                  cnt = kmlLayerTweetCount["wikipedia"]
                  kmlLayerTweetCount["wikipedia"] = cnt+1;
                }catch(e){
                  kmlLayerTweetCount["wikipedia"] = 1;
                }
                updateHTML(kmlLayerTweetCount);
              }
            }
          

        } 


        addRecentWikiEntry(data);

    });




    function resetAllKML(){
      try{
          for (var i=0; i<geoXmlDoc.gpolygons.length; i++) {
            if(geoXmlDoc.gpolygons[i].contains(tweetLocation)){
                polygon.setOptions(normalStyle);
            }
          }
      }catch(e){

    }

  }



  function showPolygonTweets(polygon){
    
    try{
      for (var i=0; i<polygonsAndTweets.length; i++) {
        if(polygon.title == polygonsAndTweets[i].title){
          tweets = polygonsAndTweets[i].tweets;
          console.log("Loading tweets: "+tweets.length)
        }
      }
    }catch(ex){
      console.log(ex)
    }   
  }




  // function hideKMLLayers(){
    
  //   try{
  //      for (var i=0; i<myParser.doc[0].gpolygons.length; i++) {
  //       myParser.doc[0].gpolygons[i].map =null;
  //      }

  //   }catch(ex){
  //     console.log(ex)
  //   }   
  // }

    //some JQUery things...
    $('#submit_neighbourhood').on('click', function(event) {
      event.preventDefault();
      console.log("click");
      hideKMLLayers();
    });

}



  function hideKMLLayers(){
    
           try{
             for (var i=0; i<geoXmlDoc.gpolygons.length; i++) {
              geoXmlDoc.gpolygons[i].setMap(null);
             }

          }catch(ex){
            console.log(ex)
          }   
  }



function clear_kml_opacity(docs){
  console.log("Clearing");
  var geoXmlDoc = docs[0];
  for (var i=0; i<geoXmlDoc.gpolygons.length; i++) {

    if(geoXmlDoc.gpolygons[i].fillOpacity == 1){
      geoXmlDoc.gpolygons[i].fillOpacity = 0;
    }else{
      geoXmlDoc.gpolygons[i].fillOpacity = 1;

    }

  }
}





function pop_arrays(){
  try{
    for (i = 0; i < (liveTweetsPos.getLength()-1); i++) { 
      liveTweetsPos.pop();
      //console.log("popping");
    }
    
  }catch(err){}
  

}   



function loadDataOnMap(data){
   for(var i=0; i<data.length; i++) {
    try{

      var tweet = JSON.parse(data[i].status);

      var lat =   tweet.geo.lat;
      var lng =   tweet.geo.lng;

            //console.log(lat,lng)
      var tweetLocation = new google.maps.LatLng(lat, lng);

      liveTweetsPos.push({location: tweetLocation, weight: 15});
      console.log(tweet);



       }catch(e){
        console.log(e)
      }

   }


  }


//var interval = setInterval(function(){pop_arrays()}, 20000);


  
