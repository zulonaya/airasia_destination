import React from "react";
import { useState, useEffect } from "react";

const Chips = ({
  item,
  destination,
  setDestination,
  thekey,
  selectedDestination,
  setSelectedDestination,
}) => {
  useEffect(() => {
    console.log("item");
    console.log(item);
  }, [item]);
  return (
    <div className="chips">
      {item ? (
        <>
          {item?.code}
          <span
            onClick={() => {
              // Store selected countries for FE
              let temp = [...destination];
              let tempobjectkey = Object.keys(destination).find(
                (key) => destination[key].code === item.code
              );

              if (temp[tempobjectkey].status)
                temp[tempobjectkey].status = false;

              let temp2 = [...selectedDestination];
              let tempobjectkey2 = Object.keys(selectedDestination).find(
                (key) => selectedDestination[key].code === item.code
              );

              if (tempobjectkey2) temp2.splice(tempobjectkey2, 1);

              console.log(temp2);

              setDestination(temp);
              setSelectedDestination(temp2);
            }}
            className="chips-close"
          >
            X
          </span>
        </>
      ) : (
        <div
          onClick={() => {
            let temps = [...destination];
            for (let i = 0; i < temps.length; i++) {
              temps[i].status = false;
            }
            setDestination(temps);
            setSelectedDestination([]);
          }}
        >
          CLEAR ALL <span className="chips-close">X</span>
        </div>
      )}
    </div>
  );
};

export default Chips;
