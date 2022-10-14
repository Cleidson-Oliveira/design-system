import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: "Primary Button",
        buttonType: "primary",
    },
    argTypes: {
        buttonType: {
            options: ["primary", "secondary"],
            control: {
                type: "inline-radio"
            }
        }
    }
} as Meta<IButtonProps>

export const PrimaryButton: StoryObj<IButtonProps> = {};

export const SecondaryButton: StoryObj<IButtonProps> = {
    args: {
        children: "Secondary Button",
        buttonType: "secondary",
    },
};