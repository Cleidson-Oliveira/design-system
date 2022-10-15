import { InputHTMLAttributes, ReactNode } from "react";

export interface IInputWraperProps { children: ReactNode }

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface IInputIconProps { children: ReactNode }

export function InputWraper ({ children }: IInputWraperProps) {
    return (
        <div className="flex items-center gap-3 w-full py-3 px-3 rounded bg-gray-900 focus-within:ring-2 ring-gold-900 text-gold-900">
            { children }
        </div>
    )
}

export function Input ({className: internalClass = "", ...props}: IInputProps) {
    
    return (
        <input 
            className={"w-full bg-transparent outline-none text-inherit text-xs placeholder:text-gold-50" + internalClass}
            {...props}
        />
    )
}

export function InputIcon ({ children }: IInputIconProps) {
    
    return (
        <div className="flex items-center justify-center w-6 h-6 text-gold-50">
            { children }
        </div>
    )
}