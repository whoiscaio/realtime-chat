import { useState } from 'react';
import { ChatContainer } from './styles';

type ChatProps = {
  currentUsername: string;
};

function Chat({ currentUsername }: ChatProps) {
  const [message, setMessage] = useState<string>('');
  const [room, setRoom] = useState<string>('');

  function handleSendMessage() {
    console.log('sent message: ', message);
  }

  function handleJoinRoom() {
    console.log('joined room: ', room);
  }

  return (
    <ChatContainer>
      <div className="chat"></div>
      <div className="actions">
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" onClick={handleSendMessage}>
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
