import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: "Test value!",
        size: "md",
        as: "span",
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "select"
            }
        },
        as: {
            options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
            control: {
                type: "select"
            }
        },
    }
} as Meta<TextProps>

export const DefaultText: StoryObj<TextProps> = {};

export const Heading: StoryObj<TextProps> = {
    args: {
        children: "Test value!",
        size: "md",
        as: "h1",
    },
};