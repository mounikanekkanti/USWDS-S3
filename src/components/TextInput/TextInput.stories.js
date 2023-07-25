import { TextInput } from ".";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    type: {
      options: ["prefix", "suffix", "default", "success", "focused", "error", "required"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    errorMessage: "Helpful error message",
    helperText: "Helper text",
    textInputLabel: "Text input label",
    type: "prefix",
    helperText1: true,
    className: {},
    textInputLabelClassName: {},
    inputClassName: {},
  },
};
