import React, { useState, useEffect } from "react";
import MapGL, {
    Source,
    Layer,
    NavigationControl,
    ScaleControl
}  from '@urbica/react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import location from "../../img/location.png"; 
import { getCurrentProfile } from "../../actions/profile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import coordinateGen from "../../utils/coordinateGen"
// import { Container } from "react-bootstrap";

const TOKEN =
  "pk.eyJ1Ijoia3lsZXMzMiIsImEiOiJja25wc2lyZGwwNTIzMzFtdnAzZzl6NjJhIn0.658oMKu-TbFxCBT1ui8mzQ";

const MapRedux = ({ getCurrentProfile,
    profile: { profile } }) => {
        useEffect(() => {
            getCurrentProfile();
          }, [getCurrentProfile]);
  //const [viewportChangeMethod] = useState('flyTo');

  var catches = profile.catches;

  var data = coordinateGen(catches)

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

  

  console.log(data)

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
              "circle-radius": 10,
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

MapRedux.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    profile: state.profile,
  });
  
  export default connect(mapStateToProps, { getCurrentProfile })(
    MapRedux
  );