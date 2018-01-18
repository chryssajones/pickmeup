// This component will render the map block with the user's location pinned



import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (

      <div className="Map">
        <header className="Map-header">
          <h1 className="Map-title">Your Location</h1>
        </header>

    <div className="Map-body">

    	var map, infoWindow;
    	function initMap() {
	        map = new google.maps.Map(document.getElementById('map'), {
	          center: {lat: 32.853151, lng: -117.183011},
	          zoom: 8
	        });
	        infoWindow = new google.maps.InfoWindow;

	        // Try HTML5 geolocation
	        if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(function(position) {
	            var pos = {
	              lat: position.coords.latitude,
	              lng: position.coords.longitude
	            };

	            infoWindow.setPosition(pos);
	            infoWindow.setContent('Location found.');
	            infoWindow.open(map);
	            map.setCenter(pos);
	          }, function() {
	            handleLocationError(true, infoWindow, map.getCenter());
	          });
	        } else {

	          // Browser doesn't support Geolocation
	          handleLocationError(false, infoWindow, map.getCenter());
	        }
	      }

	      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	        infoWindow.setPosition(pos);
	        infoWindow.setContent(browserHasGeolocation ?
	                              'Error: The Geolocation service failed.' :
	                              'Error: Your browser doesn\'t support geolocation.');
	        infoWindow.open(map);
	      }
          
      </div>
    );
  }

	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQfey2nkfdRbW43TO-9O-sl3sLrFCuNcc&callback=initMap">
}

export default Map;