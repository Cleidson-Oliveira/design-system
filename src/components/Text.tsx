import { ReactNode } from "react";
import { clsx, IDinamicClass } from "../utils/clsx";

type TAs = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface TextProps {
    children: ReactNode,
    className?: string,
    size?: "sm" | "md" | "lg",
    as?: TAs,
}

interface TextConteinerTypeProps {
    children: ReactNode,
    elClass?: string
    as?: TAs,
}

function TextConteinerType ({as = "span", elClass, children }: TextConteinerTypeProps) {
    let el: JSX.Element;

    switch (as) {
        case "p":
            el = (<p className={elClass}>{children}</p>)
            break;
        case "h1":
            el = (<h1 className={elClass}>{children}</h1>)
            break;
        case "h2":
            el = (<h2 className={elClass}>{children}</h2>)
            break;
        case "h3":
            el = (<h3 className={elClass}>{children}</h3>)
            break;
        case "h4":
            el = (<h4 className={elClass}>{children}</h4>)
            break;
        case "h5":
            el = (<h5 className={elClass}>{children}</h5>)
            break;
        case "h6":
            el = (<h6 className={elClass}>{children}</h6>)
            break;    
        case "span":
        default:
            el = (<span className={elClass}>{ children }</span>)
            break;
    }

    return el;
}

export function Text ({ as="span", size="sm", className: internalClass, children }: TextProps) {
    const isSpanOrP = as == "span" || as == "p"
    const staticClass = internalClass ? internalClass : "text-gold-50 text-sans";
    
    const dinamicClass: IDinamicClass = (isSpanOrP) ? {
        "text-xs": size == "sm",
        "text-sm": size == "md",
        "text-md": size == "lg"
    } : {
        "font-bold text-lg": size == "sm",
        "font-bold text-xl": size == "md",
        "font-bold text-2xl": size == "lg"
    }

    return (
        <TextConteinerType as={as} elClass={clsx(staticClass, dinamicClass)}>
            { children }
        </TextConteinerType>
    )
}
