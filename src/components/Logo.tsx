import { ImgHTMLAttributes } from "react";

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Logo (props: LogoProps) {
    return (
        <img {...props}/>
    )
}