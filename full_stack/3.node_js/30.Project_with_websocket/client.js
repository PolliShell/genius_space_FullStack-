const room = process.argv[2]||"public";

const socket = require("socket.io-client")("http://localhost:3002",{query:{room}});
socket.on("connect",()=>{
    console.log("I connected");

    socket.emit("message:created","Hello, server")
})


socket.on("disconnect",()=>{
    console.log("Oops i lost connection");
})
