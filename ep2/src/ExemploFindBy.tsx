import { FC, useState } from "react";

const ExemploFindBy: FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setClicked(true);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>Clicar</button>
      {!clicked && <p>O botão não foi clicado</p>}
      {clicked && <p>O botão foi clicado</p>}
    </div>
  );
};

export default ExemploFindBy;
