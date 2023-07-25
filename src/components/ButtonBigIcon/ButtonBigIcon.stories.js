import { ButtonBigIcon } from ".";

export default {
  title: "Components/ButtonBigIcon",
  component: ButtonBigIcon,
  argTypes: {
    size: {
      options: ["big-icon"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "big-icon",
    state: "disabled",
    className: {},
    playTheVideoClassName: {},
    text: "Play the Video",
  },
};
