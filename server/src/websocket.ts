import { io } from './app';

type Message = {
  text: string;
  person?: string;
  warn?: boolean;
};

io.on('connection', (socket) => {
  console.log(`Socket ID: ${socket.id}`);

  socket.on('send-message', (data: Message, room: string) => {
    if(room) {
      socket.to(room).emit('receive-message', data); 
    } else {
      socket.broadcast.emit('receive-message', data);
    }
  });

  socket.on('join-room', (data: string) => {
    socket.join(data);
  });
});
