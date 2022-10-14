import { InputHTMLAttributes, ReactNode } from "react"
import { clsx } from "../utils/clsx"

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    
}

export interface InputWraperProps {
    children: ReactNode
}

export function InputWraper ({ children }: InputWraperProps) {
    return (
        <div className="flex items-center gap-3 w-full py-4 px-3 rounded bg-gray-900 focus-within:ring-2 ring-gold-900">
            { children }
        </div>
    )
}

export function Input (props: IInputProps) {
    
    return (
        <input 
            className="bg-transparent outline-none text-gold-900 placeholder:text-gold-50"
            {...props}
        />
    )
}

export function InputIcon ({ children }: InputWraperProps) {
    
    return (
        <div className="flex items-center justify-center w-6 h-6 text-gold-50">
            { children }
        </div>
        
    )
}