import { ReactNode } from "react";
import { clsx, IDinamicClass } from "../utils/clsx";

type TAs = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface TextProps {
    children: ReactNode,
    size?: "sm" | "md" | "lg",
    as?: TAs,
}

interface TextConteinerTypeProps {
    children: ReactNode,
    elClass?: string
    as?: TAs,
}

function TextConteinerType ({as = "span", elClass, children, ...props }: TextConteinerTypeProps) {
    let el: JSX.Element;

    switch (as) {
        case "p":
            el = (<p className={elClass} {...props}>{children}</p>)
            break;
        case "h1":
            el = (<h1 className={elClass} {...props}>{children}</h1>)
            break;
        case "h2":
            el = (<h2 className={elClass} {...props}>{children}</h2>)
            break;
        case "h3":
            el = (<h3 className={elClass} {...props}>{children}</h3>)
            break;
        case "h4":
            el = (<h4 className={elClass} {...props}>{children}</h4>)
            break;
        case "h5":
            el = (<h5 className={elClass} {...props}>{children}</h5>)
            break;
        case "h6":
            el = (<h6 className={elClass} {...props}>{children}</h6>)
            break;    
        case "span":
        default:
            el = (<span className={elClass} {...props}>{ children }</span>)
            break;
    }

    return el;
}

export function Text ({ as="span", size = "sm", children }: TextProps) {
    let cls: IDinamicClass;

    if (as == "span" || as == "p") {
        cls = {
            "text-xs": size == "sm",
            "text-sm": size == "md",
            "text-md": size == "lg"
        }
    } else {
        cls = {
            "text-lg": size == "sm",
            "text-xl": size == "md",
            "text-2xl": size == "lg"
        }
    }

    return (
        <TextConteinerType as={as} elClass={clsx('text-gray-100 text-sans', cls)}>
            { children }
        </TextConteinerType>
    )
}
