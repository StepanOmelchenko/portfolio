
const map = document.querySelector('#map');

if (map) {
    
ymaps.ready(init);
var myMap;
var coords = [
  [59.961368, 30.288778]
];

function init(){     
  myMap = new ymaps.Map("map", {
    center: [59.941392, 30.293756],
    zoom: 12,
    controls: ['zoomControl']
  });  
  myMap.behaviors.disable('scrollZoom');

  var placemarks = createPlacemarks(coords);

  placemarks.forEach((placemark) => {
    myMap.geoObjects.add(placemark);
  });

  function createPlacemarks(array) {
    let placemarks = [];
  
    array.forEach((coord) => {
      let oneMark = new ymaps.Placemark([coord[0], coord[1]], {}, {
        iconLayout: 'default#image',
        iconImageSize: [46, 57],
        iconImageOffset: [0, 0]
      });  
      placemarks.push(oneMark);
    });
  
    return placemarks;
  }
  
}
}
