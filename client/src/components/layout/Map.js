import React, { useState } from "react";
import MapGL, {
    Source,
    Layer,
    NavigationControl,
    ScaleControl
}  from '@urbica/react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import location from "../../img/location.png"; 
// import { Container } from "react-bootstrap";

const TOKEN =
  "pk.eyJ1Ijoia3lsZXMzMiIsImEiOiJja25wc2lyZGwwNTIzMzFtdnAzZzl6NjJhIn0.658oMKu-TbFxCBT1ui8mzQ";

function Map() {
  //const [viewportChangeMethod] = useState('flyTo');

  const [viewport, setViewport] = useState({
    latitude: 46.767,
    longitude: -120.457,
    zoom: 11,
  });
  
  // const onChange = (event) => {
  //   setViewportChangeMethod(event.target.value);
  // };
  
  const onClick = (event) => {
    const { lngLat } = event;
  
    const newVewport = {
      ...viewport,
      latitude: lngLat.lat,
      longitude: lngLat.lng
    };
  
    setViewport(newVewport);
  };

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
          onClick={onClick}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          onViewportChange={setViewport}
          //viewportChangeMethod={viewportChangeMethod}
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
          <ScaleControl unit='metric' position='bottom-right' />
        </MapGL>

      </div>
      <div className="data-box">
        <h4>
          <div className="catch-title">Catch Data</div>
        </h4>
        <div className="container">
          <div className="title-section">
            <div className="fish-type">King Salmon</div>
            <div className="location">
              <img src={location} />
            </div>
          </div>
          <div className="catch-data">            
            <div className="catch-date">Caught 4/3/20</div>
            <div className="weight">15 pounds</div>
            <div className="length">17 inches</div>
            <div className="location">Snake River, WA</div>
          </div>
        </div>
        <div className="container">
          <div className="title-section">
            <div className="fish-type">Rainbow Trout</div>
            <div className="location">
              <img src={location} />
            </div>
          </div>
          <div className="catch-data">            
            <div className="catch-date">Caught 3/7/20</div>
            <div className="weight">7 pounds</div>
            <div className="length">12 inches</div>
            <div className="location">Yakima River, WA</div>      
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Map;