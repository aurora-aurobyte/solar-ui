
type Props = {
    title: string
    onClick:()=>void
}

export default function ThemeButton(props: Props) {
    const { title,onClick, } = props
    return (
        <>
            <a onClick={onClick} className="theme-btn btn-style-three hvr-light">
                <span className="btn-title">{title}</span>
            </a>
        </>
    )
}