const { io } = require('./app');

io.on('connection', (socket) => {
  console.log(`Socket ID: ${socket.id}`);

  socket.on('send-message', (data, room) => {
    if (room) {
      socket.to(room).emit('receive-message', data);
    } else {
      socket.broadcast.emit('receive-message', data);
    }
  });

  socket.on('join-room', (data) => {
    socket.join(data);
  });
});
