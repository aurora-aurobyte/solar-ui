import React from 'react'

type Props = {}

export default function Video({ }: Props) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="project-block-home2 text-center position-relative overflow-hidden">
                    <img className="w-100 img-fluid" src="images/resource/video-home2.jpg" alt="" />
                    <div className="video-box">
                        <a href="https://drive.google.com/file/d/1UZVAi09vWeA6oldOg3nKPFlew2JoC4bI/view?usp=drive_link" className="play-now-two lightbox-image"><i className="icon fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}