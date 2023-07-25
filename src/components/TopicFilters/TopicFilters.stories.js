import { TopicFilters } from ".";

export default {
  title: "Components/TopicFilters",
  component: TopicFilters,
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
    topicFilterSubjectReleaseClassName: {},
  },
};
