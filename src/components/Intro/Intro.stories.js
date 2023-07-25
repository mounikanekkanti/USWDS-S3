import { Intro } from ".";

export default {
  title: "Components/Intro",
  component: Intro,
  argTypes: {
    type: {
      options: ["wide", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "wide",
    className: {},
    leftClassName: {},
    releaseNotesDataClassName: {},
    text: "Release Notes &amp; Data Set Updates",
    theAgingClassName: {},
    text1:
      "The AGing, Independence, and Disability (AGID) Program Data Portal is an on-line query system based on ACL-related data files and surveys, and includes population characteristics from the Census Bureau for comparison purposes. Data Portal is an on-line query system based on ACL-related data files and surveys, and includes population characteristics from the Census Bureau for comparison purposes.",
  },
};
