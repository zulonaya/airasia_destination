import React from "react";
import { useState, useEffect } from "react";

const Card = ({
  item,
  destination,
  setDestination,
  selectedDestination,
  setSelectedDestination,
  thekey,
}) => {
  const [selected, setSelected] = useState(item?.status || false);

  useEffect(() => {
    console.log(item.status);
    if (item?.status !== null) setSelected(item?.status);
    else setSelected(false);
  }, [item, selectedDestination]);

  return (
    <div
      className={"card mb-xs " + (selected ? " active " : " ")}
      onClick={() => {
        // Store selected countries for FE
        let temp = [...destination];
        let tempobjectkey = Object.keys(destination).find(
          (key) => destination[key].code === item.code
        );

        if (temp[tempobjectkey].status)
          temp[tempobjectkey].status = !temp[tempobjectkey].status;
        else temp[tempobjectkey].status = true;

        let temp2 = [...selectedDestination];
        let tempobjectkey2 = Object.keys(selectedDestination).find(
          (key) => selectedDestination[key].code === item.code
        );

        if (tempobjectkey2) temp2.splice(tempobjectkey2, 1);
        else temp2.push(item);

        console.log(temp2);

        setDestination(temp);
        setSelectedDestination(temp2);
        setSelected(!selected);
      }}
    >
      <div className="card-image">
        <div className="overlay">
          <img className="heart" src="/images/heart.svg" />
        </div>
        <img src={item.image} />
      </div>
      <div className="card-label mt-xs">{item.country}</div>
    </div>
  );
};

export default Card;
