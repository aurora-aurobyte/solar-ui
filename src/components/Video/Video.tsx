import { useState, useRef } from "react"

type Props = {}

export default function Video({}: Props) {
    const [playing, setPlaying] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    const togglePlay = () => {
        setPlaying(!playing)
        console.log(videoRef.current)
        if (playing) videoRef.current?.pause()
        else videoRef.current?.play()
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="project-block-home2 text-center position-relative overflow-hidden">
                    {/* <img className="w-100 img-fluid" src="/images/resource/video-home2.jpg" alt="" /> */}
                    <video
                        ref={videoRef}
                        muted
                        autoPlay={playing}
                        className="w-100 img-fluid"
                        src="/videos/intro.mp4"
                    />
                    <div className="video-box">
                        <span className="play-now-two lightbox-image" onClick={togglePlay}>
                            <i className={"icon fa " + (playing ? "fa-pause" : "fa-play")}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
