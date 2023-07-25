import { Topic } from ".";

export default {
  title: "Components/Topic",
  component: Topic,
  argTypes: {
    type: {
      options: ["see-all", "element", "show-less"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "see-all",
    className: {},
    text: "Data element name",
  },
};
