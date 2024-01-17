type Props = {}

type Project = {
    title: string;
    subtitle: string;
    imageHref: string;

}

const projects: Array<Project> = [
    { title: "", subtitle: "", imageHref: "/images/resource/projects/Jaffna30kw.jpg" },
    { title: "", subtitle: "", imageHref: "/images/resource/projects/chunnakam20kw.jpg" },
    { title: "", subtitle: "", imageHref: "/images/resource/projects/pointpedro20kw.jpg" },
    { title: "", subtitle: "", imageHref: "/images/resource/projects/karaveddy20kw.jpg" },
    { title: "", subtitle: "", imageHref: "/images/resource/projects/kilinochi5kw.jpg" },
    { title: "", subtitle: "", imageHref: "/images/resource/projects/sillalai5kw.jpg" },
    { title: "", subtitle: "", imageHref: "/images/resource/projects/valvettithurai5kw.jpg" },
    { title: "", subtitle: "", imageHref: "/images/resource/projects/karaveddy.jpg" },
];

export default function ProjectsPage({}: Props) {
    return (
        <>
            {/* <!-- Start main-content --> */}
            <section className="page-title" style={{ backgroundImage: "url(images/background/page-title-bg.png)" }}>
                <div className="auto-container">
                    <div className="title-outer text-center">
                        <h1 className="title">Projects</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Projects</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- end main-content --> */}

            {/* <!-- Project Section --> */}
            <section className="project-section pb-90">
                <div className="large-container">
                    {/* <!-- Prject Carousel --> */}
                    <div className="row wow fadeInUp">
                        {
                            projects.map(project => {
                                return <div className="col-xl-3 col-sm-6">
                                    {/* <!-- Project Block --> */}
                                    <div className="project-block mb-30">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <a href={project.imageHref} className="lightbox-image">
                                                        <img src={project.imageHref} alt="" />
                                                    </a>
                                                </figure>
                                                {/* <a href="page-project-details.html" className="icon">
                                                    <i className="fa fa-plus"></i>
                                                </a> */}
                                            </div>
                                            {/* <div className="content-box">
                                                <span className="sub-title">{project.subtitle}</span>
                                                <h4 className="title">
                                                    <a href="page-project-details.html">{project.title}</a>
                                                </h4>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
            {/* <!--End Project Section --> */}
        </>
    )
}
