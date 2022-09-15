import React, { useState} from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3002");

const App = () => {
  //  Counter is a state initialized to 0
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [counter3, setCounter3] = useState(0);

  //Listen from server.js
  // useEffect(() => {
    socket.on("click_count1", function (value) {
      setCounter1(value); //Set new count value
    });
    socket.on("click_count2", function (value) {
      setCounter2(value); //Set new count value
    });
    socket.on("click_count3", function (value) {
      setCounter3(value); //Set new count value
    });
  // }, []);

  // Function is called everytime button1 is clicked
  const handleClick1 = () => {
    // Counter1 state is incremented
    socket.emit("clicked1"); //Emitting user click
  };

  // Function is called everytime button2 is clicked
  const handleClick2 = () => {
    // Counter2 state is incremented
    socket.emit("clicked2"); //Emitting user click
  };

  // Function is called everytime button3 is clicked
  const handleClick3 = () => {
    // Counter2 state is incremented
    socket.emit("clicked3"); //Emitting user click
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <div>
          <div>{counter1}</div>
          <div className="buttons">
            <button onClick={handleClick1}>Button1</button>
          </div>
        </div>
        <div>
          <div>{counter2}</div>
          <div className="buttons">
            <button onClick={handleClick2}>Button2</button>
          </div>
        </div>
        <div>
          <div>{counter3}</div>
          <div className="buttons">
            <button onClick={handleClick3}>Button3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
