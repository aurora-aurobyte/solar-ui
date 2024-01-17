import { useEffect } from "react"
import { RouterLink } from "routes/components"

type Props = {}

export default function MainSlider({}: Props) {
    useEffect(() => {
        // @ts-ignore
        mainSlider()
    }, [])
    return (
        <>
            {/* <!--Main Slider--> */}
            <section className="main-slider">
                <div
                    className="rev_slider_wrapper fullwidthbanner-container"
                    id="rev_slider_one_wrapper"
                    data-source="gallery"
                >
                    <div className="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
                        <ul>
                            {/* <!-- Slide 1 --> */}
                            <li data-index="rs-1" data-transition="zoomout">
                                {/* <!-- MAIN IMAGE --> */}
                                <img src="/images/main-slider/1.jpg" alt="" className="rev-slidebg" />
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[15,15,15,15]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['750','750','750','650']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['-150','-40','0','-30']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <h2>
                                        Renewable <br />
                                        Solar Solution
                                    </h2>
                                </div>
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['650','650','650','470']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['0','-160','-120','-170']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <span className="title">
                                        A perfect blend of global experience and expertise to further our focus on
                                        technology advancement
                                    </span>
                                </div>
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[15,15,15,15]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['700','750','700','450']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['120','120','150','120']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <RouterLink href="/services" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">Discover More</span>
                                    </RouterLink>
                                </div>
                            </li>

                            {/* <!-- Slide 2 --> */}
                            <li data-index="rs-2" data-transition="zoomout">
                                {/* <!-- MAIN IMAGE --> */}
                                <img src="/images/main-slider/2.jpg" alt="" className="rev-slidebg" />
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[15,15,15,15]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['750','750','750','650']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['-150','-40','0','-30']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <h2>
                                        Energize Society <br />
                                        Reliable Energy
                                    </h2>
                                </div>
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['650','650','650','470']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['0','-160','-120','-170']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <span className="title">
                                        Ecology Limited are a fully independent, specialist ecological consultancy,
                                        working across the Sri Lanka
                                    </span>
                                </div>

                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[15,15,15,15]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['700','750','700','450']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['120','120','150','120']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <RouterLink href="/about" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">Explore More</span>
                                    </RouterLink>
                                </div>
                            </li>

                            {/* <!-- Slide 3 --> */}
                            <li data-index="rs-2" data-transition="zoomout">
                                {/* <!-- MAIN IMAGE --> */}
                                <img src="/images/main-slider/4.png" alt="" className="rev-slidebg" />
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[15,15,15,15]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['750','750','750','650']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['-150','-40','0','-30']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <h2>
                                        Energize Society <br />
                                        Reliable Energy
                                    </h2>
                                </div>
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['650','650','650','470']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['0','-160','-120','-170']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <span className="title">
                                        Ecology Limited are a fully independent, specialist ecological consultancy,
                                        working across the Sri Lanka
                                    </span>
                                </div>

                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[15,15,15,15]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['700','750','700','450']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['120','120','150','120']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <RouterLink href="/news" className="theme-btn btn-style-one hvr-light">
                                        <span className="btn-title">Explore More</span>
                                    </RouterLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- End Main Slider--> */}
        </>
    )
}
