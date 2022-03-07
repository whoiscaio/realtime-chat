import { useState } from 'react';
import Chat from './Chat';

function App() {
  const [username, setUsername] = useState<string>('');
  const [isUsernameSet, setIsUsernameSet] = useState<boolean>(false);

  return (
    <div className="App">
      <h1>Chat App</h1>
      {
        !isUsernameSet
        ? (
          <>
            <input type="text" placeholder="Inform your username..." value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="button" onClick={() => ( username.trim() && setIsUsernameSet(true) )}>Set username</button>
          </>
        )
        : (
          <Chat currentUsername={username} />
        )
      }
    </div>
  );
}

export default App;
