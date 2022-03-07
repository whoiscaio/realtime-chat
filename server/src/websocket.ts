import { io } from './app';

type Message = {
  text: string;
  person?: string;
  warn?: boolean;
};

io.on('connection', (socket) => {
  console.log(`Socket ID: ${socket.id}`);

  socket.on('send-message', (data: Message) => {
    socket.broadcast.emit('receive-message', data);
  });
});
