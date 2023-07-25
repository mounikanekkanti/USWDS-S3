import { QuickSearchFilter } from ".";

export default {
  title: "Components/QuickSearchFilter",
  component: QuickSearchFilter,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    text: "Type to filter topics (132)",
  },
};
