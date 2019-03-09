
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

var runLayer = omnivore.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vSpteNyZyHlSfOXgEb_rBtSVWlPdsrqQOR5WDS8ckGey8g-lMfp9shx20ERfbKPHYsAK3FrOVSgEIR7/pub?output=csv')
     .on('ready', function(layer) {
     map.flyToBounds(runLayer.getBounds(),{padding: [350,350]});
        // An example of customizing marker styles based on an attribute.
        // In this case, the data, a CSV file, has a column called 'state'
        // with values referring to states. Your data might have different
        // values, so adjust to fit.

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
