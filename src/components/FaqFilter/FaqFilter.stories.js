import { FaqFilter } from ".";

export default {
  title: "Components/FaqFilter",
  component: FaqFilter,
  argTypes: {
    type: {
      options: ["FAQ", "glossary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "FAQ",
    className: {},
    frameClassName: {},
    frameClassNameOverride: {},
    frameFaqFilterTopicText: "Annexed",
    frameFaqFilterTopicText1: "Allotment",
    frameFaqFilterTopicText2: "AAA - Area Agencies on Aging",
    frameFaqFilterTopicText3: "ACL - Administration",
    frameFaqFilterTopicLevelSubjectClassName: {},
    frameFaqFilterTopicText4: "Atrophy",
    frameFaqFilterTopicLevel: "question",
    frameFaqFilterTopicText5: "AGID - AGing, Independence, and Disability",
    frameExpandedYesClassName: {},
    frameExpandedYesClassNameOverride: {},
    frameExpandedNoClassName: {},
    frameExpandedNoClassNameOverride: {},
    frameFaqFilterTopicWrapperClassName: {},
    frameFaqFilterTopicWrapperClassNameOverride: {},
    frameDivClassName: {},
  },
};
