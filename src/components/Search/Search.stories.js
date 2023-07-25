import { Search } from ".";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: {
    size: {
      options: ["big", "small", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "big",
    className: {},
    overlapClassName: {},
    vector4StyleOverrideClassName: {},
    groupClassName: {},
  },
};
