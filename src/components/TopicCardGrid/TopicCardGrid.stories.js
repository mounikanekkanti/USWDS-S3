import { TopicCardGrid } from ".";

export default {
  title: "Components/TopicCardGrid",
  component: TopicCardGrid,
  argTypes: {
    type: {
      options: [
        "briefs-and-blogs",
        "tutorial",
        "data-report-image",
        "data-set",
        "release-notes",
        "codebooks",
        "webinar",
        "state-profiles",
        "data-report",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "briefs-and-blogs",
    className: {},
    text: "ACL Special Tabulations",
    americanCommunityClassName: {},
    text1: "Version 2.64: 2023 NSOAAP LTCOP",
  },
};
