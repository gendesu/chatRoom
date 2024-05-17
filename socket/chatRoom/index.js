var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http, {
  allowEIO3: true,
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
require('./socket.js')(io)
 
http.listen(3000, function () {
  console.log("listening on *:3000");
});
 