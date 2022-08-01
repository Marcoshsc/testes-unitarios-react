import { render, screen } from "@testing-library/react";
import setup from "./common/setupTests";
import ExemploFindBy from "./ExemploFindBy";

describe("Testa o componente ExemploFindBy", () => {
  it("Mostra que o botão não foi clicado por padrão", () => {
    render(<ExemploFindBy />);
    expect(screen.getByText("O botão não foi clicado")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Clicar/ })).toBeInTheDocument();
  });
  it("Mostra que o botão foi clicado, 3 segundos após clicar no botão", async () => {
    const { user } = setup(<ExemploFindBy />);
    await user.click(screen.getByRole("button", { name: /Clicar/ }));
    expect(await screen.findByText("O botão foi clicado", undefined, { timeout: 3000 })).toBeInTheDocument();
  });
});
