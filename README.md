PickMeUp ReadMe

PickMeUp is a web-based application optimized for mobile phone devices, designed primarily for ease-of-use with minimal clicks.

The app function allows the user to request a ride from a trusted contact or a list of trusted contacts, like a private version of Lyft or Uber. 

To request a ride, the user taps the "Pick me Up" button, then chooses when (s)he will be ready (now, in 5 minutes, in 10 minutes, etc), then chooses to whom to send the request from a short list of contacts.

Upon requesting a ride, the app obtains the geolocation of the user's device and sends it to the recipient (driver).  When the driver accepts the ride, the app obtains the driver's geolocation and plots a route using Google Maps, then sends a confirmation message back to the user with the estimated time of arrival.  If the user moves to a new location outside of a geofence, the driver will get an automatic location update.

This app is intended for use by families with children or teens who frequently need rides to/from various places, or could be used by anyone who needs a ride but would prefer asking a friend or family member than a stranger.  Parental controls could be added to control who receives ride requests or view a log of a teen's rides.  An SOS button could be added for a single-tap urgent ride request and location alert to all contacts in the event of a potentially unsafe situation.

Front End Elements:
<ul>
<li>HTML5</li>
<li>Bootstrap</li>
<li>CSS</li>
<li>jQuery Mobile</li>
<li>JavaScript</li>
</ul>

Back End Elements:
React
Express
Google Maps API for geolocation
Firebase for user authentication
MongoDB for ride data persistence
SMS package handling to send location data
Contacts integration package handler
