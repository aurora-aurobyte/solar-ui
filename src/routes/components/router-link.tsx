import PropTypes from "prop-types"
import { forwardRef } from "react"
import { Link, NavLink } from "react-router-dom"

// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ href, ...other }: any, ref: any) => (
    <Link ref={ref} to={href} {...other} />
))

RouterLink.propTypes = {
    href: PropTypes.string,
}

const RouterNavLink = forwardRef(
    ({ href, className = "", activeClassName, ...other }: any, ref: any) => {
        return (
            <NavLink
                ref={ref}
                to={href}
                {...other}
                className={({ isActive }: { isActive: boolean }) =>
                    isActive ? className + " " + activeClassName : className
                }
            />
        )
    }
)

RouterNavLink.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
}

export default RouterLink
export { RouterNavLink }
