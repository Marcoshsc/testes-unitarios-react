import { screen } from "@testing-library/react";
import setup from "./common/setupTests";
import ExemploCallback from "./ExemploCallback";

describe("Testa o componente ExemploCallback", () => {
  it("Seleciona o valor especificado e chama o callback onChange ao clicar em uma opção", async () => {
    const handleChange = vi.fn();
    const { user } = setup(<ExemploCallback value="opt1" onChange={handleChange} />);
    expect((screen.getByRole("option", { name: /Opt1/ }) as HTMLOptionElement).selected).toBe(true);
    await user.selectOptions(screen.getByRole("option", { name: /Opt3/ }).parentElement!, "opt3");
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenNthCalledWith(1, "opt3");

    await user.selectOptions(screen.getByRole("option", { name: /Opt2/ }).parentElement!, "opt2");
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenNthCalledWith(2, "opt2");
  });
});
