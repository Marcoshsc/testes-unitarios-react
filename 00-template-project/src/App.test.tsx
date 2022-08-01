import { render, screen } from "@testing-library/react";
import App from "./App";
import setup from "./common/setupTests";

describe("Testa o componente do contador", () => {
  it("Mostra Hello world se não tiver clicado", async () => {
    render(<App />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
  it("Mostra Hello world clicked se tiver clicado", async () => {
    const { user } = setup(<App />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
    await user.click(screen.getByText("Hello world"));
    expect(screen.getByText("Hello world clicked")).toBeInTheDocument();
  });
});
