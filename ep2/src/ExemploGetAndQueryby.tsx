import { FC, useState } from "react";

const ExemploGetAndQueryBy: FC = () => {
  const [code, setCode] = useState("");

  return (
    <div>
      <p>Digite o código:</p>
      <label htmlFor="input-code">Input code</label>
      <input id="input-code" value={code} onChange={(e) => setCode(e.target.value)} />
      {code === "codigo-x" && "Parabéns, você acertou o código!"}
    </div>
  );
};

export default ExemploGetAndQueryBy;
