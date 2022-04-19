import React, { useState, useCallback, useMemo, useRef } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Tooltip,
  ZoomControl,
  Marker,
  Popup
} from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const center = {
  lat: 8.323365,
  lng: 123.686847
};

const MapLocation = () => {
  return (
    <MapContainer
      center={center}
      zoom={10}
      className="w-full h-full z-0"
      minZoom={9}
      zoomControl={false}
      // scrollWheelZoom={false}
      // dragging={false}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=4uThU4o90RRvKR2XeMf9"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        opacity={0.7}
      />
      <ZoomControl position="bottomright" />
      <DraggableMarker />
    </MapContainer>
  );
};

function DraggableMarker() {
  const [position, setPosition] = useState(center);
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
    >
      <Popup minWidth={90}>
        <span>Draggable Marker</span>
      </Popup>
    </Marker>
  );
}

export default MapLocation;
