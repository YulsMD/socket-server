const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { stringify } = require("querystring");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
    console.log(`a user connected ${socket.id}`);
    
    socket.on("send_message", (data) => {
      console.log("Mensaje recibido del cliente:", JSON.stringify(data));
      socket.broadcast.emit("receive_message", data);
    });
  });  
  
server.listen(4000, () => {
  console.log("listening on *:4000");
});

module.exports = { app, server }
