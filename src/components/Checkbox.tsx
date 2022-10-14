import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface ICheckboxProps {}

export function Checkbox (props: ICheckboxProps) {

    return (
        <CheckboxPrimitive.Root className="flex justify-center items-center w-6 h-6 bg-gray-900 rounded">
            <CheckboxPrimitive.Indicator>
                <Check className="h-5 w-5 text-gold-900" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}