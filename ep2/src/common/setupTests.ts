import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

const setup = (component: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};

export default setup;
