import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import dataGeoJson from "../data/municities-province-ph104200000.0.1.json";

const getRanges = (minCasesCount, interval) => {
  const ranges = [];
  let opacity = 0.2;

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      const min = parseFloat(minCasesCount);
      const max = parseFloat(minCasesCount + interval);
      const range = {
        min: parseFloat(min.toFixed(2)),
        max: parseFloat(max.toFixed(2)),
        opacity: parseFloat(opacity.toFixed(1))
      };
      ranges.push(range);
      opacity += 0.2;
    } else {
      const min = ranges[ranges.length - 1].max + 1;
      const max = min + interval;
      const range = {
        min: parseFloat(min.toFixed(2)),
        max: parseFloat(max.toFixed(2)),
        opacity: parseFloat(opacity.toFixed(1))
      };
      ranges.push(range);
      opacity += 0.2;
    }
  }
  return ranges;
};
const getCases = (dengueData, year) => {
  const casesCount = {};
  if (year === "All") {
    // count occurences of cases for municities
    for (const el of dengueData) {
      if (casesCount[el.Muncity]) {
        casesCount[el.Muncity] += 1;
      } else {
        casesCount[el.Muncity] = 1;
      }
    }
  } else {
    const yearData = dengueData.filter(
      d => d.DateOfEntry.split("/")[2] === year[2] + year[3]
    );
    // count occurences of cases for municities
    for (const el of yearData) {
      if (casesCount[el.Muncity]) {
        casesCount[el.Muncity] += 1;
      } else {
        casesCount[el.Muncity] = 1;
      }
    }
  }

  return casesCount;
};

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
