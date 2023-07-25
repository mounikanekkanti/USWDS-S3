import { DataFilterHeadings } from ".";

export default {
  title: "Components/DataFilterHeadings",
  component: DataFilterHeadings,
  argTypes: {
    level: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    level: "two",
    className: {},
    text: "Use the filters to create a custom query.",
    text1: "Select Data Set",
    dataExplorerClassName: {},
    text2: "Data Explorer",
    hasUseTheFiltersTo: true,
  },
};
