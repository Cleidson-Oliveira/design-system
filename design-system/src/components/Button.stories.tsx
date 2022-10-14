import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps } from "./Button";
import { UserPlus } from "phosphor-react";

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
        },
        fn: {
            table: {
                disable: true
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

export const JustIconButton: StoryObj<IButtonProps> = {
    args: {
        children: (<UserPlus className="w-5 h-5" />),
        buttonType: "secondary",
        justIcon: true,
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};