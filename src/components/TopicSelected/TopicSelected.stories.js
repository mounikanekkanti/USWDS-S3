import { TopicSelected } from ".";

export default {
  title: "Components/TopicSelected",
  component: TopicSelected,
  argTypes: {
    type: {
      options: [
        "services",
        "programs",
        "demographics",
        "all-content-types",
        "years",
        "geographic-type",
        "states",
        "content-types",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "services",
    className: {},
  },
};
