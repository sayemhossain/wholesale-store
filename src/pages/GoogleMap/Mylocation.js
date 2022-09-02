import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "70vh",
};

const center = {
  lat: 23.751253358654438,
  lng: 90.37335669185462,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAC6FepISzZtYdthL_vX87kVs3EgAUbSwo">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
