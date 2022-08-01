import { screen } from "@testing-library/react";
import setup from "./common/setupTests";
import ExemploGetAllAndTestId from "./ExemploGetAllAndTestId";

describe("Testa o componente ExemploGetAllAndTestId", () => {
  it("Mostra todos os nomes digitados", async () => {
    const { user } = setup(<ExemploGetAllAndTestId />);
    await user.type(screen.getByTestId("input-name"), "marcos");
    await user.click(screen.getByRole("button", { name: /Escrever nome/ }));

    await user.type(screen.getByTestId("input-name"), "lucas");
    await user.click(screen.getByRole("button", { name: /Escrever nome/ }));

    await user.type(screen.getByTestId("input-name"), "marcos");
    await user.click(screen.getByRole("button", { name: /Escrever nome/ }));

    expect(screen.getAllByText("marcos").length).toEqual(2);
    expect(screen.getAllByText("lucas").length).toEqual(1);
  });
});
