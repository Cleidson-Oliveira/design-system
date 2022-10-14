import { Meta, StoryObj } from "@storybook/react";
import { Input, InputWraper, InputWraperProps, InputIcon } from "./Input";
import { Envelope } from "phosphor-react";

export default {
    title: 'Components/Input',
    component: InputWraper,
    args: {
        children: (
            [
                <InputIcon><Envelope /></InputIcon>,
                <Input placeholder="Type anything!" />
            ]
        )
    },
    argTypes: {
        children: {
            table: {disable: true}
        }
    }

} as Meta<InputWraperProps>

export const InputDefault: StoryObj<InputWraperProps> = {};

