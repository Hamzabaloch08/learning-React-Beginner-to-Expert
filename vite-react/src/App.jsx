import Message from "./Message";

function App() {
  const username = "Hamza";
  // evaluated expression {username}
  return (
    <div>
      <Message />
      <h1>Hello my name is {username}</h1>
    </div>
  );
}

export default App;
