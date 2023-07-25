import { FaqFilterTopic } from ".";

export default {
  title: "Components/FaqFilterTopic",
  component: FaqFilterTopic,
  argTypes: {
    level: {
      options: ["subject", "question", "selected"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    level: "subject",
    className: {},
    text: "About AGID",
    text1: "What is AGID?",
  },
};
