interface TextProps {
    children: JSX.Element
}

export function Text ({ children }: TextProps) {
    return (
        <span className="text-gold-100">
            Text
        </span>
    )
}