

type Props = {}

export default function StickyHeader({ }: Props) {
    return (
        <div className="sticky-header">
            <div className="auto-container">
                <div className="inner-container">
                    {/* <!--Logo--> */}
                    <div className="logo">
                        <a href="index.html" title=""><img src="images/logo.png" alt="" title="" /></a>
                    </div>

                    {/* <!--Right Col--> */}
                    <div className="nav-outer">
                        {/* <!-- Main Menu --> */}
                        <nav className="main-menu">
                            <div className="navbar-collapse show collapse clearfix">
                                <ul className="navigation clearfix">
                                    {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                                </ul>
                            </div>
                        </nav>
                        {/* <!-- Main Menu End--> */}

                        {/* <!--Mobile Navigation Toggler--> */}
                        <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}