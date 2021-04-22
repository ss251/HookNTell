import React, { useState } from "react";
import MapGL, {
    Source,
    Layer,
    NavigationControl,
}  from '@urbica/react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css"; 

const TOKEN =
  "pk.eyJ1Ijoia3lsZXMzMiIsImEiOiJja25wc2lyZGwwNTIzMzFtdnAzZzl6NjJhIn0.658oMKu-TbFxCBT1ui8mzQ";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 46.767,
    longitude: -120.457,
    zoom: 11,
  });

  //const [filterValue, setFilterValue] = useState(1);

  const data = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          foo: 1,
        },
        geometry: {
          type: "Point",
          coordinates: [-120.45711545883267, 46.767089260934085],
        },
      },
      {
        type: "Feature",
        properties: {
          foo: 2,
        },
        geometry: {
          type: "Point",
          coordinates: [-120.45230857813326, 46.80146457308077],
        },
      },
      {
        type: "Feature",
        properties: {
          foo: 3,
        },
        geometry: {
          type: "Point",
          coordinates: [-120.4544591516004, 46.75904739681614],
        },
      },
    ],
  };

  return (
    <section className="map">
      <div className="map-box">
        <h1>
          <div className="map-title">Catch Map</div>
        </h1>
        <div className="outer">
          <div className="search">Searchbar Here </div>
        </div>
        <MapGL
          style={{ width: "100%", height: "400px" }}
          mapStyle="mapbox://styles/kyles32/cknpu9e1p65k417nqs991zxcd"
          accessToken={TOKEN}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          onViewportChange={setViewport}
        >
          <Source id="points" type="geojson" data={data} />
          <Layer
            id="points"
            type="circle"
            source="points"
            paint={{
              "circle-radius": 5,
              "circle-color": "#1978c8",
            }}
          />
          <NavigationControl showCompass showZoom position="top-right" />
        </MapGL>

        {/* <button onClick={() => setFilterValue(1)}>1</button>
        <button onClick={() => setFilterValue(2)}>2</button>
        <button onClick={() => setFilterValue(3)}>3</button> */}
      </div>
      <div className="data-box">
        <h4>Catch Data</h4>
      </div>
    </section>
  );
}

export default Map;