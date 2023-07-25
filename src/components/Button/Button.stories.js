import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: [
        "accent-cool",
        "success",
        "secondary",
        "outline",
        "primary",
        "outline-inverse",
        "accent-warm",
        "base",
        "inverse",
        "error",
        "disabled",
      ],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "accent-cool",
    state: "disabled",
    className: {},
    text: "Button",
  },
};
