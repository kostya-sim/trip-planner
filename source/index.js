const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1Ijoia29zdHlhcyIsImEiOiJjazd1b3VzbGgxZDBqM2xydmV1aXZtdGlrIn0.wIJF-NgAU5XQrAMKmCDtmQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



const marker1 = buildMarker("hotels", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker1.addTo(map);