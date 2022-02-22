import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import dataGeoJson from "../data/municities-province-ph104200000.0.1.json";

const Map = props => {
  const { setMunicity, setProvince } = props;
  const [mapKey, setMapKey] = useState(Math.random());
  const [layerSelected, setLayerSelected] = useState("");

  const centerLoc = [8.323365, 123.686847];

  useEffect(() => {
    setMapKey(Math.random());
  }, []);

  const HandleClickPopup = (province, layer) => {
    const municityName = province.properties.ADM3_EN;
    const provinceName = province.properties.ADM2_EN;

    const onLayerClick = () => {
      setMunicity(municityName);
      setProvince(provinceName);
      setLayerSelected(municityName);
      layer.bringToFront();
    };

    // layer.bindPopup(provName);
    layer.options.fillOpacity = Math.random() * 1;
    layer.on({
      // mouseOver: changeStyleOnHover,
      click: onLayerClick
    });
  };

  return (
    <>
      <MapContainer
        key={mapKey}
        center={centerLoc}
        zoom={10}
        className="w-full h-full"
        minZoom={9}
        // dragging={false}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=4uThU4o90RRvKR2XeMf9"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {/* <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        {dataGeoJson.features.map(geoJson => {
          return (
            <GeoJSON
              key={geoJson.properties.ADM3_EN}
              style={{
                fillColor: "#e00000",
                color:
                  layerSelected === geoJson.properties.ADM3_EN
                    ? "white"
                    : "#000",
                weight: layerSelected === geoJson.properties.ADM3_EN ? 3 : 2
              }}
              data={geoJson}
              onEachFeature={HandleClickPopup}
            >
              <Tooltip>{geoJson.properties.ADM3_EN}</Tooltip>
            </GeoJSON>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
