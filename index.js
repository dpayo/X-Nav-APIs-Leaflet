$( function() {


var map = L.map('map').setView([ 40.2838,-3.8215], 18);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
     maxZoom: 20
}).addTo(map);

L.marker([ 40.2838,-3.8215]).addTo(map)
    .bindPopup('Aulario III ')
    .openPopup();

    var circle = L.circle([40.2838,-3.8215], 15, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);

  map.on('click', onMapClick);
  function onMapClick(e) {
      alert("You clicked the map at " + e.latlng);
  }
})
