import { FC, useState } from "react";

const ExemploGetAllAndTestId: FC = () => {
  const [value, setValue] = useState("");
  const [names, setNames] = useState<string[]>([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setNames((prev) => [...prev, value]);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid="input-name" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Escrever nome</button>
      </form>
      <div>
        {names.map((name, idx) => (
          <p key={name + idx}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default ExemploGetAllAndTestId;
