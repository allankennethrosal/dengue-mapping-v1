import React, { useState } from "react";
import ModalDetailsPatientInfo from "./ModalDetailsPatientInfo";
import ModalDetailsCaseInfo from "./ModalDetailsCaseInfo";
import ModalDetailsDRU from "./ModalDetailsDRU";
import ModalDetailsOtherInfo from "./ModalDetailsOtherInfo";
import ModalDetailsMenu from "./ModalDetailsMenu";

const ModalDetails = props => {
  const { open, handleClose, selectedData } = props;
  const [activePage, setActivePage] = useState(0);

  const handleMenuClick = pageNum => {
    setActivePage(pageNum);
  };

  return (
    <>
      <div
        className="absolute left-0 bg-white w-screen z-30 p-5 overflow-y-scroll"
        style={{
          height: "calc(100% - 64px)",
          top: 64,
          display: open ? "block" : "none"
        }}
      >
        <div className="flex flex-col justify-start items-start bg-white w-full space-y-5">
          <div className="flex justify-between items-center space-x-3 w-full">
            <h4 className="flex-1 md:text-md text-sm font-bold bg-gray-100 p-3 rounded-md drop-shadow-md">
              <span className="text-gray-900">EPID: </span>
              <span className="text-green-700 truncate overflow-hidden text-ellipsis">
                {selectedData.EPIID}
                {/* A3D000804D914BE199E60AB14B4A027E */}
              </span>
            </h4>
            <button
              onClick={() => {
                handleClose();
                setActivePage(0);
              }}
            >
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
                <line x1="9" y1="9" x2="15" y2="15" />{" "}
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </button>
          </div>

          <div className="flex justify-between items-center space-x-3 w-full">
            <ModalDetailsMenu
              activePage={activePage}
              handleMenuClick={handleMenuClick}
            />
          </div>

          <div className="w-full border-t-2 py-5 border-gray-100">
            {activePage === 0 && (
              <ModalDetailsPatientInfo selectedData={selectedData} />
            )}
            {activePage === 1 && (
              <ModalDetailsCaseInfo selectedData={selectedData} />
            )}
            {activePage === 2 && (
              <ModalDetailsDRU selectedData={selectedData} />
            )}
            {activePage === 3 && (
              <ModalDetailsOtherInfo selectedData={selectedData} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetails;
