const LogoSection = () => {
    return (
        <div
            className="tp-caption"
            data-paddingbottom="[0,0,0,0]"
            data-paddingleft="[15,15,15,15]"
            data-paddingright="[15,15,15,15]"
            data-paddingtop="[0,0,0,0]"
            data-responsive_offset="on"
            data-type="text"
            data-height="none"
            data-width="['250','250','300','350']"
            data-whitespace="normal"
            data-hoffset="['0','0','0','0']"
            data-voffset="['220','220','250','220']"
            data-x="['left','left','left','left']"
            data-y="['middle','middle','middle','middle']"
            data-textalign="['top','top','top','top']"
            data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
        >
            <div className="row slider-logo">
                <div className="col-4 d-flex justify-content-center wow fadeInUp">
                    <div className="cont">
                        <img src="images/about/sri-lanka.png" />
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center wow fadeInUp" data-wow-delay="200ms">
                    <div className="cont">
                        <img src="images/about/ceb.png" />
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center wow fadeInUp" data-wow-delay="400ms">
                    <div className="cont">
                        <img src="images/about/sustainable-energy.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoSection
