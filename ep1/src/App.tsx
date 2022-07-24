import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Valor: {value}</p>
      <button onClick={() => setValue((value) => value + 1)}>Aumentar o valor</button>
      <button onClick={() => setValue(0)}>Reiniciar contador</button>
    </div>
  );
}

export default App;
