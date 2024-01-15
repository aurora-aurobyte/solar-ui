type Props = {}

type Project = {
    title: string;
    subtitle: string;
    imageHref: string;

}

const projects: Array<Project> = [
    { title: "Maximizing Solar ROI", subtitle: "SOLAR ENERGY", imageHref: "/images/resource/project-1.jpg" },
    { title: "Diversifying Your Solar", subtitle: "SOLAR ENERGY", imageHref: "/images/resource/project-2.jpg" },
    { title: "The Benefits of Solar", subtitle: "SOLAR ENERGY", imageHref: "/images/resource/project-3.jpg" },
    { title: "Shining a Light", subtitle: "SOLAR ENERGY", imageHref: "/images/resource/project-4.jpg" },
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
                                                <a href="page-project-details.html" className="icon">
                                                    <i className="fa fa-plus"></i>
                                                </a>
                                            </div>
                                            <div className="content-box">
                                                <span className="sub-title">{project.subtitle}</span>
                                                <h4 className="title">
                                                    <a href="page-project-details.html">{project.title}</a>
                                                </h4>
                                            </div>
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
