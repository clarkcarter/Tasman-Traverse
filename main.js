L.mapbox.accessToken = 'pk.eyJ1IjoiY2xhcmtjYXJ0ZXIiLCJhIjoiY2p0MHpnaXBmMDNxNDQ5cGd5dXk2Mzh5eCJ9.Pqxx2YDY44GbuMmlIt1t-g';
var map = L.mapbox.map('map')
  .setView([-36, 163], 0)
  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));

// Omnivore will AJAX-request this file behind the scenes and parse it:
// note that there are considerations:
// - The CSV file must contain latitude and longitude values, in column
//   named roughly latitude and longitude
// - The file must either be on the same domain as the page that requests it,
//   or both the server it is requested from and the user's browser must
//   support CORS.

var runLayer = omnivore.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vSJHEq3YOJbEbwTR7xVuOJWoehmZAN7b0pwWXQ3kBYMm8S0VB0BVTkyyoYw52onHySJmQkmLE74EAvp/pub?gid=577896986&single=true&output=csv')
     .on('ready', function(layer) {
       // reload data in realtime (note "}, 2000);" to close off function)
     //map.flyToBounds(runLayer.getBounds(),{padding: [350,350]});

     map.fitBounds(runLayer.getBounds(),{padding: [50,50]});
        // An example of customizing marker styles based on an attribute.
        // In this case, the data, a CSV file, has a column called 'state'
        // with values referring to states. Your data might have different
        // values, so adjust to fit.
        this.eachLayer(function(marker) {
            if (marker.toGeoJSON().properties.name === 'Clark') {
                // The argument to L.mapbox.marker.icon is based on the
                // simplestyle-spec: see that specification for a full
                // description of options.
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#ff0000',
                    'marker-size': 'large',
                    'marker-symbol': 'c',
                }));
            } else if (marker.toGeoJSON().properties.name === 'Matt') {
                  // The argument to L.mapbox.marker.icon is based on the
                  // simplestyle-spec: see that specification for a full
                  // description of options.
                  marker.setIcon(L.mapbox.marker.icon({
                      'marker-color': '#007700',
                      'marker-size': 'large',
                      'marker-symbol': 'm',
                  }));
            } else if (marker.toGeoJSON().properties.name === 'Dan') {
                  // The argument to L.mapbox.marker.icon is based on the
                  // simplestyle-spec: see that specification for a full
                  // description of options.
                  marker.setIcon(L.mapbox.marker.icon({
                      'marker-color': '#0000ff',
                      'marker-size': 'large',
                      'marker-symbol': 'd',
                  }));
            } else if (marker.toGeoJSON().properties.name === 'Julien') {
                  // The argument to L.mapbox.marker.icon is based on the
                  // simplestyle-spec: see that specification for a full
                  // description of options.
                  marker.setIcon(L.mapbox.marker.icon({
                      'marker-color': '#ffff00',
                      'marker-size': 'large',
                      'marker-symbol': 'j',
                  }));
            } else if (marker.toGeoJSON().properties.name === 'Mick') {
                  // The argument to L.mapbox.marker.icon is based on the
                  // simplestyle-spec: see that specification for a full
                  // description of options.
                  marker.setIcon(L.mapbox.marker.icon({
                      'marker-color': '#333333',
                      'marker-size': 'large',
                      'marker-symbol': 'm',
                  }));
          } else if (marker.toGeoJSON().properties.name === 'Ryan') {
                // The argument to L.mapbox.marker.icon is based on the
                // simplestyle-spec: see that specification for a full
                // description of options.
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#3ac66c',
                    'marker-size': 'large',
                    'marker-symbol': 'r',
                }));
            } else if (marker.toGeoJSON().properties.name === 'Troodles') {
                  // The argument to L.mapbox.marker.icon is based on the
                  // simplestyle-spec: see that specification for a full
                  // description of options.
                  marker.setIcon(L.mapbox.marker.icon({
                      'marker-color': '#ff2222',
                      'marker-size': 'large',
                      'marker-symbol': 't',
                  }));
            } else {
                marker.setIcon(L.mapbox.marker.icon({}));
            }
            // Bind a popup to each icon based on the same properties
                marker.bindPopup(marker.feature.properties.name);
            marker.on('mouseover', function (e) {
                this.openPopup();
            });
            marker.on('mouseout', function (e) {
                this.closePopup();
            });
        });
    })
    .addTo(map);

    var myVar = setInterval(reloadPage, 120000);

    function reloadPage() {
      location.reload(true);
    }
