import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { ChatContainer } from './styles';

type ChatProps = {
  currentUsername: string;
};

type Message = {
  text: string;
  person?: string;
  warn?: boolean;
};

let socket: Socket;
const SOCKET_URI = 'http://localhost:8080';

function Chat({ currentUsername }: ChatProps) {
  const [message, setMessage] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [joinedRoom, setJoinedRoom] = useState<string>('');
  const [messageList, setMessageList] = useState<Message[]>([]);

  useEffect(() => {
    socket = io(SOCKET_URI);
  }, []);

  function handleSendMessage() {
    const newMessage = {
      text: message,
      person: currentUsername,
    };

    setMessageList((prevState) => [...prevState, newMessage]);
    setMessage('');

    socket.emit('message', newMessage);
  }

  function handleJoinRoom() {
    setJoinedRoom(room);

    setRoom('');
  }

  useEffect(() => {
    if (!joinedRoom) return;

    setMessageList((prevState) => [
      ...prevState,
      {
        text: `Joined room ${joinedRoom}`,
        warn: true,
      },
    ]);
  }, [joinedRoom]);

  return (
    <ChatContainer>
      <div className="chat">
        {messageList &&
          messageList.map((message) => (
            <div
              key={JSON.stringify(message)}
              className={
                message.warn
                  ? 'warn-message'
                  : message.person === currentUsername
                  ? 'sent-message'
                  : 'received-message'
              }
            >
              {message.person && <span>{message.person}</span>}
              <p>{message.text}</p>
            </div>
          ))}
      </div>
      <div className="actions">
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSendMessage}
            disabled={!Boolean(joinedRoom)}
          >
            Send message
          </button>
        </div>
        <div>
          <input
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button type="button" onClick={handleJoinRoom}>
            Join room
          </button>
        </div>
      </div>
    </ChatContainer>
  );
}

export default Chat;
