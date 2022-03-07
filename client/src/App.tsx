import { useState } from 'react';
import Chat from './Chat';
import { globalStyles } from './globalStyles';
import { Header, LoginContainer } from './styles';

function App() {
  const [username, setUsername] = useState<string>('');
  const [isUsernameSet, setIsUsernameSet] = useState<boolean>(false);

  globalStyles();

  return (
    <div className="App">
      <Header>
        <h1>Chat App</h1>
        { isUsernameSet && <span>{username}</span> }
      </Header>
      {
        !isUsernameSet
        ? (
          <LoginContainer>
            <input type="text" placeholder="Inform your username..." value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="button" onClick={() => ( username.trim() && setIsUsernameSet(true) )}>Set username</button>
          </LoginContainer>
        )
        : (
          <Chat currentUsername={username} />
        )
      }
    </div>
  );
}

export default App;
