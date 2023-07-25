import { TopicNavigator } from ".";

export default {
  title: "Components/TopicNavigator",
  component: TopicNavigator,
  argTypes: {
    view: {
      options: ["grid", "list"],
      control: { type: "select" },
    },
    content: {
      options: ["results", "notes", "none"],
      control: { type: "select" },
    },
    type: {
      options: ["release-notes", "topic"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    view: "grid",
    content: "results",
    type: "release-notes",
    className: {},
    text: "Release Notes",
    topicCardGridText: "ACL Special Tabulations",
    topicCardGridText1: "ACL Special Tabulations",
    topicCardGridText2: "ACL Special Tabulations",
    topicCardGridText3: "ACL Special Tabulations",
    topicCardGridText4: "ACL Special Tabulations",
    topicCardGridText5: "ACL Special Tabulations",
    topicCardGridText6: "ACL Special Tabulations",
    topicCardGridText7: "ACL Special Tabulations",
    topicCardGridText8: "ACL Special Tabulations",
    topicCardGridText9: "ACL Special Tabulations",
    topicCardGridText10: "ACL Special Tabulations",
    topicCardGridText11: "ACL Special Tabulations",
  },
};
