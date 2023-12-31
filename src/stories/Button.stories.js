import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  // tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

// export const Secondary = {
//   args: {
//     label: "Button",
//   },
// };

export const Success = {
  args: {
    // size: "large",
    primary: true,
    label: "Button",
    backgroundColor: "green",
  },
};

export const Danger = {
  args: {
    // size: "small",
    primary: true,
    label: "Button",
    backgroundColor: "red",
  },
};
