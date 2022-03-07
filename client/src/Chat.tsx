type ChatProps = {
  currentUsername: string,
}

function Chat({ currentUsername }: ChatProps) {
  return (
    <div>
      <header>
        <h1>Chat</h1>
        <span>{currentUsername}</span>
      </header>
    </div>
  )
}
export default Chat