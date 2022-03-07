import { io } from './app';

io.on('connection', (socket) => {
  console.log(`Socket ID: ${socket.id}`);

  socket.on('message', (data) => {
    console.log(data);
  });
});
