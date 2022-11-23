import React from "react";
import Confetti from "react-confetti";

const Success = ({
  setShowSubmit,
  destination,
  setDestination,
  selectedDestination,
  setSelectedDestination,
}) => {
  return (
    <div className="success">
      <div className="container">
        <Confetti numberOfPieces={210} recycle={false} />
        <h3 className="text-center font-dark">
          Thanks for letting us get to know you a little better!
        </h3>
        <h2 className="text-center font-dark">
          Look out for a little reward we'll be sending your way 😉
        </h2>
        <div className="text-center">
          <button
            className="btn btn-secondary back-home"
            onClick={() => {
              let temps = [...destination];
              for (let i = 0; i < temps.length; i++) {
                temps[i].status = false;
              }
              setDestination(temps);
              setSelectedDestination([]);
              setShowSubmit(false);
            }}
          >
            {" "}
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
