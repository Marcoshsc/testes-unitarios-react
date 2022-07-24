import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const setup = (component: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};

describe("Testa o componente do contador", () => {
  it("Testa se o componente aumenta corretamente ao clicar no botão", async () => {
    const { user } = setup(<App />);
    expect(screen.getByText("Valor: 0")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Aumentar o valor/ }));
    expect(screen.getByText("Valor: 1")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Aumentar o valor/ }));
    expect(screen.getByText("Valor: 2")).toBeInTheDocument();
  });

  it("Testa se o componente reinicia corretamente ao clicar no botão", async () => {
    const { user } = setup(<App />);
    await user.click(screen.getByRole("button", { name: /Aumentar o valor/ }));
    await user.click(screen.getByRole("button", { name: /Aumentar o valor/ }));
    await user.click(screen.getByRole("button", { name: /Aumentar o valor/ }));

    expect(screen.getByText("Valor: 3")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Reiniciar contador/ }));
    expect(screen.getByText("Valor: 0")).toBeInTheDocument();
  });
});
