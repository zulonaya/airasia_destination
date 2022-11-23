import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import Submit from "./Submit";

const Destination = ({
  searchResults,
  destination,
  setDestination,
  setSearch,
  selectedDestination,
  setSelectedDestination,
  setShowSubmit,
}) => {
  useEffect(() => {
    console.log(selectedDestination);
  }, [selectedDestination]);
  return (
    <div className="container">
      <h2 className="text-center font-dark">Places that you've travel to</h2>
      <div className="text-center font-gray mb-xs">Cool 🤩</div>
      {/* Search box */}
      <div className="mb-xs">
        <input
          className="search-box font-gray"
          placeholder="Search a country or region"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="grid-container">
        {searchResults ? (
          <>
            {searchResults?.map((item, k) => {
              return (
                <Card
                  item={item}
                  key={"search_" + k}
                  destination={destination}
                  setDestination={setDestination}
                  selectedDestination={selectedDestination}
                  setSelectedDestination={setSelectedDestination}
                  thekey={k}
                />
              );
            })}
          </>
        ) : (
          <>
            {destination?.map((item, k) => {
              return (
                <Card
                  item={item}
                  key={"destination_" + k}
                  destination={destination}
                  setDestination={setDestination}
                  thekey={k}
                  selectedDestination={selectedDestination}
                  setSelectedDestination={setSelectedDestination}
                />
              );
            })}
          </>
        )}
      </div>
      {selectedDestination.length > 0 ? (
        <Submit
          destination={destination}
          setDestination={setDestination}
          selectedDestination={selectedDestination}
          setSelectedDestination={setSelectedDestination}
          setShowSubmit={setShowSubmit}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Destination;
