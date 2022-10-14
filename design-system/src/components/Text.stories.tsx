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
                type: "inline-radio"
            }
        }
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