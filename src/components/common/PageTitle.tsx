import { RouterLink } from "routes/components"

type LinkType = {
    title: string
    href: string
}

type Props = {
    title: string
    links?: LinkType[]
}

const PageTitle = ({ title, links = [{ title: "Home", href: "/" }] }: Props) => {
    return (
        <section className="page-title" style={{ backgroundImage: "url(/images/background/page-title-bg.png)" }}>
            <div className="auto-container">
                <div className="title-outer text-center">
                    <h1 className="title">{title}</h1>
                    <ul className="page-breadcrumb">
                        {links.map((link: LinkType, id: number) => (
                            <li key={id}>
                                <RouterLink href={link.href}>{link.title}</RouterLink>
                            </li>
                        ))}
                        <li>{title}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PageTitle
