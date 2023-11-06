import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// ----------------------------------------------------------------------

export function useScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)

        // @ts-ignore
        window.init()
        // @ts-ignore
        window.appear()
        // @ts-ignore
        window.fancyBox()
    }, [pathname])

    return null
}
