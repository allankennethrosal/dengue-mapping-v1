import React, { useState } from "react";
import MapLocation from "../map/MapLocation";

const ModalDetailsPatientInfo = ({ open }) => {
  const [position, setPosition] = useState({
    lat: 8.143329652254984,
    lng: 123.84247183799745
  });

  const radioBtn = e => {
    // console.log(e.target.value);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col md:space-x-5 space-x-0 md:space-y-0 space-y-5 w-full">
        <div className="flex flex-col space-y-5 flex-1">
          <label className="text-lg border-l-4 border-green-500 pl-3 font-bold">
            Personal Information
          </label>
          <div className="flex sm:flex-row flex-col sm:space-x-3 space-x-0 sm:space-y-0 space-y-3">
            <div className="flex flex-1 flex-col justify-start items-start space-y-3">
              <label className="text-sm">Age in Years:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
            <div className="flex flex-1 flex-col justify-start items-start space-y-3">
              <label className="text-sm">Age in Months:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
            <div className="flex flex-1 flex-col justify-start items-start space-y-3">
              <label className="text-sm">Age in Days:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
          </div>

          <div className="flex justify-start items-center space-x-3">
            <div className="flex flex-1 flex-col justify-start items-start space-y-3">
              <label className="text-sm">Sex:</label>
              <div
                onChange={radioBtn}
                className="flex justify-start items-center space-x-5 w-full p-5 border-2 border-gray-300 rounded-lg"
              >
                <label className="flex justify-start items-center space-x-2">
                  <input type="radio" value="Male" name="gender" />
                  <span>Male</span>
                </label>
                <label className="flex justify-start items-center space-x-2">
                  <input type="radio" value="Female" name="gender" />
                  <span>Female</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start py-3 space-y-5">
            <label className="text-lg border-l-4 border-green-500 pl-3 font-bold">
              Patient Location
            </label>
            <div className="flex justify-center items-start w-full space-x-3">
              <div className="flex flex-col justify-center items-start space-y-3 flex-1">
                <label className="text-sm">Latitude:</label>
                <input
                  className="p-3 rounded-lg w-full border-2 border-gray-300"
                  disabled
                  value={position.lat}
                />
              </div>
              <div className="flex flex-col justify-center items-start space-y-3 flex-1">
                <label className="text-sm">Longitude:</label>
                <input
                  className="p-3 rounded-lg w-full border-2 border-gray-300"
                  disabled
                  value={position.lng}
                />
              </div>
            </div>
            <div
              className="bg-gray-100 w-full border-gray-300 border-2"
              style={{ height: 300 }}
            >
              {open && (
                <MapLocation position={position} setPosition={setPosition} />
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full rounded-lg">
          <div className="flex flex-col space-y-5">
            <label className="text-lg border-l-4 border-green-500 pl-3 font-bold">
              Address Information
            </label>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">Street/Purok:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">Barangay:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">City/Municipality:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">District:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">Province:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-sm">Region:</label>
              <input className="p-3 rounded-lg w-full border-2 border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsPatientInfo;
