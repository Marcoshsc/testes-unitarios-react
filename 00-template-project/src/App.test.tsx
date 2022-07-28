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
