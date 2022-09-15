import React, { useState } from "react";

const ExtraButton = () => {
  let [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "18vh",
          right: "-7vh",
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "purple",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClick}
        >
          Extra Button
        </button>
      </div>
    </div>
  );
};

export default ExtraButton;
