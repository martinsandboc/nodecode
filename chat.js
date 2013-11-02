var sio = require("socket.io");

var connections = [];

sio.listen(1337).sockets.on("connection", function (socket) {
    
    socket.emit("new_message", "Welcome to the chat client!");
  
    connections.push(socket);

    socket.on("user_sent", function (data) {
    
        for (var i = 0; i < connections.length; i++)
        {
            if (connections[i] != socket)
            {
                connections[i].emit("new_message", data);
            }
        }

    });

});
