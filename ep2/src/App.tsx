import { useState } from "react";
import ExemploCallback from "./ExemploCallback";
import ExemploFindBy from "./ExemploFindBy";
import ExemploGetAllAndTestId from "./ExemploGetAllAndTestId";
import ExemploGetAndQueryBy from "./ExemploGetAndQueryby";

function App() {
  const [value, setValue] = useState<string>();

  return <ExemploGetAllAndTestId />;
}

export default App;
