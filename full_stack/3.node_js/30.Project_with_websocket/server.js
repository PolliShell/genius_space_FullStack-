const httpServer = require("http").createServer();
const io= require("socket.io")(httpServer,{
    cors:{
        origin:"*",
    }
});

io.on("connection", onConnection);

function onConnection(socket){
    console.log("New connection", socket.id)

    const {room}=socket.handshake.query;

    socket.join(room);

    socket.on("message:created",(message)=>{
        console.log("New message", message);
        io.to(room).emit("message:created",message)
    })

}

httpServer.listen(3002,()=>{
    console.log("Server is ready on 3002");
})