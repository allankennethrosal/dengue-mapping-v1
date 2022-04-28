import React, { useRef, useContext } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, ZoomControl, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { TableContext } from "../../../context/TableContext";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [35, 46],
  iconAnchor: [17, 46]
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapLocation = () => {
  const { addModalData } = useContext(TableContext);

  return (
    <MapContainer
      center={{ lat: addModalData.Lat, lng: addModalData.Lng }}
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
      <DraggableMarker />
    </MapContainer>
  );
};

function DraggableMarker() {
  const { addModalData, setAddModalData } = useContext(TableContext);
  const markerRef = useRef(null);

  return (
    <Marker
      draggable={true}
      eventHandlers={{
        dragend: () => {
          const marker = markerRef.current;
          if (marker != null) {
            setAddModalData({
              ...addModalData,
              Lat: marker.getLatLng().lat,
              Lng: marker.getLatLng().lng
            });
          }
        }
      }}
      position={{ lat: addModalData.Lat, lng: addModalData.Lng }}
      ref={markerRef}
    ></Marker>
  );
}

export default MapLocation;
