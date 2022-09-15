const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connect: ${socket.id}`);

  //on user connected sends the current click count
  socket.emit("click_count1", counter1);
  socket.emit("click_count2", counter2);
  socket.emit("click_count3", counter3);

  //when user click the button
  socket.on("clicked1", function () {
    counter1 += 1; //increments global click count
    server.emit("click_count1", counter1); //send to all users new counter value
  });
  socket.on("clicked2", function () {
    counter2 += 1; //increments global click count
    server.emit("click_count2", counter2); //send to all users new counter value
  });
  socket.on("clicked3", function () {
    counter3 += 1; //increments global click count
    server.emit("click_count3", counter3); //send to all users new counter value
  });
});

//starting server
server.listen(3002, () => {
  console.log("listening on port: 3002");
});
