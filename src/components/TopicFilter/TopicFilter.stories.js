import { TopicFilter } from ".";

export default {
  title: "Components/TopicFilter",
  component: TopicFilter,
  argTypes: {
    subject: {
      options: ["release-notes", "topics"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    subject: "release-notes",
    selected: true,
    className: {},
  },
};
