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

        // @ts-ignore
        if ($(".wow").length) {
            // @ts-ignore
            var wow = new WOW({
                boxClass: "wow", // animated element css class (default is wow)
                animateClass: "animated", // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true, // act on asynchronously loaded content (default is true)
            })
            wow.init()
        }

        // @ts-ignore
        if ($(".filter-list").length) {
            // @ts-ignore
            $(".filter-list").mixItUp({})
        }
    }, [pathname])

    return null
}
