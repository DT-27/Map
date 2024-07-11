var map = L.map('map').setView([5.554028, -0.205556], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

if (navigator.geolocation) {

    setInterval(()=>{
      navigator.geolocation.getCurrentPosition(getPosition)
    },20000) // This refreshes every 5 minutes, change later
}else {
  console.log('Your browser does not support this feature');
}
function getPosition(position) {

  var lat = position.coords.latitude
  var long = position.coords.longitude
  var accuracy = position.coords.accuracy
  var marker = L.marker([lat, long]).addTo(map)
  //var circle = L.circle([lat, long], {radius:accuracy}).addTo(map)
//var featureGroup = L.featureGroup([marker, circle]).addTo(map)

L.Routing.control({
  waypoints: [
    L.latLng(lat, long),
    L.latLng(5.554028, -0.205556)
  ]
}).addTo(map);
  console.log("Your coordinates "+ lat + long + accuracy);
}
