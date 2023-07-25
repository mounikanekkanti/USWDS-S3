import { Topics } from ".";

export default {
  title: "Components/Topics",
  component: Topics,
  argTypes: {
    level: {
      options: [
        "geo-type",
        "state",
        "data-set",
        "release-note",
        "state-radio",
        "sub-subtopic-no-info",
        "sub-topic-no-info",
        "sub-topic",
        "suv-subtopic",
        "topic",
      ],
      control: { type: "select" },
    },
    dataAvailable: {
      options: ["unavailable-with-selected-data-set-unavailable-with-selected-data-set", "yes", "no"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    level: "geo-type",
    selected: true,
    info: true,
    expanded: true,
    dataAvailable: "unavailable-with-selected-data-set-unavailable-with-selected-data-set",
    className: {},
    text: "State Name",
    stateIndependentClassName: {},
    text1: "Sub-topic [0/9]",
    visible: true,
    subTopicClassName: {},
    visible1: true,
  },
};
