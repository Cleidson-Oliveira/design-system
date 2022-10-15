import { ReactNode, ButtonHTMLAttributes } from "react";
import { clsx } from "../utils/clsx";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    buttonType?: "primary" | "secondary",
    justIcon?: boolean,
    fn?: () => void
}

export function Button ({ buttonType = "primary", justIcon = false, className="", children, fn, ...props }: IButtonProps) {

    const staticClassButton = "h-12 py-auto px-4 rounded focus:ring-2 font-semibold text-sm transition-colors" + className;
    const dinamicClassButton = {
        "bg-gold-900 text-gray-800 ring-white hover:bg-gold-300": buttonType === "primary",
        "bg-gray-900 text-gold-900 ring-gold-900 hover:bg-gray-600": buttonType === "secondary",
    }

    const dinamicWidthButton = {
        "w-full": !justIcon,
        "w-12": justIcon
    }
    
    return (
        <button 
            className={clsx(staticClassButton, dinamicClassButton, dinamicWidthButton)}
            onClick={() => fn!()}
            {...props}
        >
            {children}
        </button>
    )
}