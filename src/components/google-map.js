import React from "react";
import GoogleMapReact from "google-map-react";

const MapMarker = ({ text }) => <div>{text}</div>;

const Map = (props) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={Map.defaultProps.center}
        defaultZoom={Map.defaultProps.zoom}
      >
        <MapMarker
          lat={Map.defaultProps.center.lat}
          lng={Map.defaultProps.center.lng}
          text="Farm City Inc."
        />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 28.52314, lng: -81.38338 },
  zoom: 16,
};

export default Map;
