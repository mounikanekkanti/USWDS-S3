import { PageContactWrapper } from ".";

export default {
  title: "Components/PageContactWrapper",
  component: PageContactWrapper,
  argTypes: {
    page: {
      options: ["FAQ", "contact"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    page: "FAQ",
    className: {},
    contactBlockText: "AGID Related Inquiries",
    contactBlockText1: "ACL",
    contactBlockText2: "eldercare.acl.gov",
  },
};
