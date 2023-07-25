import { View } from ".";

export default {
  title: "Components/View",
  component: View,
  argTypes: {
    view: {
      options: ["grid", "list"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    view: "grid",
    className: {},
  },
};
