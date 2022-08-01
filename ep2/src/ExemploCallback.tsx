import { FC } from "react";

type ExemploCallbackProps = {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
};

const ExemploCallback: FC<ExemploCallbackProps> = ({ value, onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value={undefined}>Selecione uma opção</option>
      <option value="opt1">Opt1</option>
      <option value="opt2">Opt2</option>
      <option value="opt3">Opt3</option>
    </select>
  );
};

export default ExemploCallback;
