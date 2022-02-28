import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Tooltip,
  ZoomControl
} from "react-leaflet";
import dataGeoJson from "../data/municities-province-ph104200000.0.1.json";
import { getCases, getRanges } from "../utils/MapUtils";

const Map = props => {
  const {
    muncity,
    setMuncity,
    setProvince,
    dengueData,
    setMuncityCasesCount,
    year
  } = props;
  const [layerSelected, setLayerSelected] = useState("");
  const centerLoc = [8.323365, 123.686847];

  // get all cases count, lowest and highest cases
  const casesCount = getCases(dengueData, year);
  const casesValues = Object.values(casesCount);
  const maxCasesCount = Math.max(...casesValues);
  const minCasesCount = Math.min(...casesValues);

  // get interval and range of cases based on min and max cases
  const interval = Math.floor((maxCasesCount - minCasesCount) / 5);
  const ranges = getRanges(minCasesCount, interval);

  // events for each geojson layer
  const onEachLayer = (muncity, layer) => {
    const muncityName = muncity.properties.ADM3_EN;
    const provinceName = muncity.properties.ADM2_EN;

    const onLayerClick = () => {
      setMuncity(muncityName);
      setProvince(provinceName);
      setLayerSelected(muncityName);
      layer.bringToFront();
    };

    const muncityCases = casesCount[muncityName.toUpperCase()];
    const rangeCases = ranges.filter(
      r => r.min <= muncityCases && r.max >= muncityCases
    )[0];
    layer.options.fillOpacity =
      muncityCases === 0 || muncityCases === undefined ? 0 : rangeCases.opacity;
    layer.on({
      click: onLayerClick
    });
  };

  const numberOfCases = casesCount[muncity.toUpperCase()];
  if (numberOfCases) {
    setMuncityCasesCount(numberOfCases);
  } else {
    setMuncityCasesCount(0);
  }

  return (
    <>
      <MapContainer
        key={year}
        center={centerLoc}
        zoom={10}
        className="w-full h-full z-0"
        minZoom={9}
        zoomControl={false}
        // dragging={false}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=4uThU4o90RRvKR2XeMf9"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          opacity={0.7}
        />
        {/* <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <ZoomControl position="bottomright" />
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
              onEachFeature={onEachLayer}
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
