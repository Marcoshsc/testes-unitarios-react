import { render, screen } from "@testing-library/react";
import setup from "./common/setupTests";
import ExemploGetAndQueryBy from "./ExemploGetAndQueryby";

const mensagemAcerto = "Parabéns, você acertou o código!";

describe("Testa o componente ExemploGetAndQueryby", () => {
  it("Pede o código para o usuário e não mostra a mensagem de acerto por padrão", () => {
    render(<ExemploGetAndQueryBy />);
    expect(screen.getByText("Digite o código:")).toBeInTheDocument();
    expect(screen.queryByText(mensagemAcerto)).not.toBeInTheDocument();
  });
  it("Não mostra a mensagem de acerto caso o código digitado não seja codigo-x", async () => {
    const { user } = setup(<ExemploGetAndQueryBy />);
    await user.type(screen.getByLabelText("Input code"), "codigo");
    expect(screen.queryByText(mensagemAcerto)).not.toBeInTheDocument();
  });
  it("Mostra a mensagem de acerto caso o código digitado seja codigo-x", async () => {
    const { user } = setup(<ExemploGetAndQueryBy />);
    await user.type(screen.getByLabelText("Input code"), "codigo-x");
    expect(screen.getByText(mensagemAcerto)).toBeInTheDocument();
  });
});
