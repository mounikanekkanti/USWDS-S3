import { ResultsFilter } from ".";

export default {
  title: "Components/ResultsFilter",
  component: ResultsFilter,
  argTypes: {
    type: {
      options: ["list-view", "data-set", "view-all", "release-notes", "grid-view", "brief", "data-report", "codebook"],
      control: { type: "select" },
    },
    checked: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "list-view",
    checked: "off",
    className: {},
  },
};
