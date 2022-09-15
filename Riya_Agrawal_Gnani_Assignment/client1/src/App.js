import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ExtraButton from "./ExtraButton";

const socket = io.connect("http://localhost:3002", {
  forceNew: true,
  multiplex: false,
});

const App = () => {
  //  Counter is a state initialized to 0
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [counter3, setCounter3] = useState(0);

  // Function is called everytime button1 is clicked
  const handleClick1 = () => {
    socket.emit("clicked1"); //Emitting user click
    // window.location.reload(false);
  };
  // Function is called everytime button2 is clicked
  const handleClick2 = () => {
    socket.emit("clicked2"); //Emitting user click
    // window.location.reload(false);
  };
  // Function is called everytime button3 is clicked
  const handleClick3 = () => {
    socket.emit("clicked3"); //Emitting user click
    // window.location.reload(false);
  };

  //Listen from server.js
  useEffect(() => {
    socket.on("click_count1", function (value) {
      setCounter1(value); //Set new count value
    });
    socket.on("click_count2", function (value) {
      setCounter2(value); //Set new count value
    });
    socket.on("click_count3", function (value) {
      setCounter3(value); //Set new count value
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "200%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-10vh",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "200%",
            position: "relative",
            top: "-5vh",
            backgroundColor: "red",
            color: "yellow",
          }}
        >
          Counter Game
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "100%",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "120%",
              position: "relative",
              top: "18vh",
              right: "-4vh",
            }}
          >
            {counter1}
          </div>
          <div className="buttons">
            <button
              style={{
                fontSize: "60%",
                position: "relative",
                top: "20vh",
                marginRight: "5px",
                backgroundColor: "green",
                borderRadius: "8%",
                color: "white",
              }}
              onClick={handleClick1}
            >
              Button1
            </button>
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "120%",
              position: "relative",
              top: "18vh",
              right: "-4vh",
            }}
          >
            {counter2}
          </div>
          <div className="buttons">
            <button
              style={{
                fontSize: "60%",
                position: "relative",
                top: "20vh",
                marginRight: "5px",
                backgroundColor: "blue",
                borderRadius: "8%",
                color: "white",
              }}
              onClick={handleClick2}
            >
              Button2
            </button>
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "120%",
              position: "relative",
              top: "18vh",
              right: "-4vh",
            }}
          >
            {counter3}
          </div>
          <div className="buttons">
            <button
              style={{
                fontSize: "60%",
                position: "relative",
                top: "20vh",
                marginRight: "5px",
                backgroundColor: "orange",
                borderRadius: "8%",
                color: "white",
              }}
              onClick={handleClick3}
            >
              Button3
            </button>
          </div>
        </div>
        <ExtraButton />
      </div>
    </div>
  );
};

export default App;
