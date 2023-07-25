import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    breadcrumbs: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    version: {
      options: ["v-2", "MVP"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    breadcrumbs: "off",
    version: "v-2",
    className: {},
    quickSearchSearchGroupClassName: {},
    quickSearchSearchOverlapClassName: {},
    navLinkVisible: true,
    groupClassName: {},
    navLinkText: "Resources",
    navLinkVisible1: true,
  },
};
