import React, { useState, useMemo, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, ZoomControl, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [35, 46],
  iconAnchor: [17, 46]
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapLocation = ({ position, setPosition }) => {
  return (
    <MapContainer
      center={position}
      zoom={12}
      className="w-full h-full z-0"
      minZoom={9}
      zoomControl={false}
      // scrollWheelZoom={false}
      // dragging={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <DraggableMarker position={position} setPosition={setPosition} />
    </MapContainer>
  );
};

function DraggableMarker({ position, setPosition }) {
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      }
    }),
    []
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    ></Marker>
  );
}

export default MapLocation;
