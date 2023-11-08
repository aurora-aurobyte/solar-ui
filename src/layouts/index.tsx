import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

// ----------------------------------------------------------------------

export default function Layout({ children }: { children: any }) {
    return (
        <div className="page-wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}
