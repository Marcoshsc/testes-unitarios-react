import { useState } from "react";

function App() {
  const [text, setText] = useState("Hello world");

  return (
    <div>
      <p onClick={() => setText("Hello world clicked")}>{text}</p>
    </div>
  );
}

export default App;
