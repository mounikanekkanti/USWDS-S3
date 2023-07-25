import { DataElement } from ".";

export default {
  title: "Components/DataElement",
  component: DataElement,
  argTypes: {
    category: {
      options: ["services", "programs", "demographics", "data-set", "monetary", "content-type", "geographic"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    category: "services",
    expanded: true,
    tiles: true,
    className: {},
  },
};
