import { useLocation } from "react-router-dom"
import { RouterNavLink } from "routes/components"

const menus = [
    {
        name: "Home",
        path: "/",
        exact: true,
    },
    {
        name: "About",
        path: "/about",
        exact: true,
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Products",
        path: "/products",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    // {
    //     name: "News Feeds",
    //     path: "/news",
    // },
    {
        name: "Contact",
        path: "/contact-us",
        exact: true,
    },
]

const Navigation = () => {
    const { pathname } = useLocation()

    return (
        <>
            {menus.map((menu: any, id: number) => (
                <li
                    key={menu.path}
                    className={
                        menu.exact && pathname === menu.path
                            ? "current"
                            : !menu.exact && pathname.startsWith(menu.path)
                            ? "current"
                            : ""
                    }
                >
                    <RouterNavLink href={menu.path}>{menu.name}</RouterNavLink>
                </li>
            ))}
        </>
    )
}

export default Navigation
