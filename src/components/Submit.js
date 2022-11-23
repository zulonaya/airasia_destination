import React from "react";
import Chips from "./Chips";
import { useState, useEffect } from "react";

const Submit = ({
  destination,
  setDestination,
  selectedDestination,
  setSelectedDestination,
  setShowSubmit,
}) => {
  useEffect(() => {
    console.log("selectedDestination");
    console.log(selectedDestination);
  }, [selectedDestination]);

  return (
    <div className="submit-div text-center">
      {selectedDestination.length ? (
        <div className="">
          {selectedDestination?.map((item, k) => {
            return (
              <Chips
                item={item}
                key={"chips_" + k}
                selectedDestination={selectedDestination}
                setSelectedDestination={setSelectedDestination}
                destination={destination}
                setDestination={setDestination}
                thekey={k}
              />
            );
          })}
          <Chips
            destination={destination}
            setDestination={setDestination}
            selectedDestination={selectedDestination}
            setSelectedDestination={setSelectedDestination}
          />
        </div>
      ) : (
        ""
      )}
      <button
        onClick={() => {
          setShowSubmit(true);
        }}
        className="btn btn-main"
      >
        Submit
      </button>
    </div>
  );
};

export default Submit;
