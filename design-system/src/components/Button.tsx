import { ReactNode } from "react"
import { clsx } from "../utils/clsx"

export interface IButtonProps {
    children: ReactNode,
    buttonType?: "primary" | "secondary";
    fn?: () => void
}

export function Button ({ buttonType = "primary", children, fn }: IButtonProps) {

    const staticClassButton = "w-full py-4 px-3 rounded focus:ring-2 font-semibold text-sm transition-colors"
    const dinamicClassButton = {
        "bg-gold-900 text-gray-800 ring-white hover:bg-gold-300": buttonType === "primary",
        "bg-gray-900 text-gold-900 ring-gold-900 hover:bg-gray-600": buttonType === "secondary",
    }
    
    return (
        <button 
            className={clsx(staticClassButton, dinamicClassButton)}
            onClick={() => fn!()}
        >
            {children}
        </button>
    )
}