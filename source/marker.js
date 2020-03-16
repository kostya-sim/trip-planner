const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    let newMark = document.createElement("div");
    newMark.style.width = "32px";
    newMark.style.height = "39px";
    newMark.style.backgroundImage = "string";
  
    console.log(newMark.style);
    console.log(newMark.style.backgroundImage);
    console.log(`"url(${iconURLs[type]})"`);
    return new mapbox.Marker(newMark).setLngLat(coords);
    
};

module.exports = buildMarker;