import Geocode from "react-geocode";

function coordinateGen(catches) {
  var foo = 1;
  Geocode.setApiKey("AIzaSyAUnKPar-4YiTMrmjzVTq-EBCV8dslmXWQ");

  Geocode.setLanguage("en");

  Geocode.setLocationType("ROOFTOP");

  Geocode.enableDebug();

  var features = [];

  var data = {
    type: "FeatureCollection",
    features,
  };

  catches.forEach((element) => {
    Geocode.fromAddress(element.location).then(
      (response) => {
        const lat1 = response.results[0].geometry.location.lat;
        const lng1 = response.results[0].geometry.location.lng;
        element["lat"] = lat1;
        element["lng"] = lng1;
        var json = {
          type: "Feature",
          properties: {
            foo: foo,
          },
          geometry: {
            type: "Point",
            coordinates: [lat1, lng1],
          },
        };
        features.push(json);
        json = {};
        foo += 1;
      },
      (error) => {
        console.error(error);
      }
    );
    data = {
      type: "FeatureCollection",
      features,
    };
  });

  return data;
}

export default coordinateGen;
