import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { MAPS_API } from "../../constants/Constants";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

const Maps = ({ center, zoom, text }) => {
  return (
    <GoogleMapReact
      defaultCenter={center}
      defaultZoom={zoom}
      bootstrapURLKeys={{
        key: MAPS_API
      }}
    >
      <AnyReactComponent lat={center.lat} lng={center.lng} text={text} />
    </GoogleMapReact>
  );
};

Maps.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  text: PropTypes.string
};

Maps.defaultProps = {
  center: { lat: 43.7735, lng: -79.5019 },
  zoom: 16.8,
  text: "York University"
};

export default Maps;
