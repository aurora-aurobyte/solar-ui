import React from "react"
import Service from "../components/service/Service"
import WhyChoose from "../components/WhyChoose.tsx/WhyChoose"
import About from "../components/about/About"
import Project from "../components/project/Project"
import Faq from "../components/Faq/Faq"
import Team from "../components/team/Team"
import Video from "../components/Video/Video"
import Footer from "../layouts/footer/Footer"
import TableComponent from "../components/tableComponent/TableComponent"
type Props = {}

export default function HomePage({}: Props) {
    return (
        <>
            <About />
            <Video />
            <TableComponent />
            <Service />
            <WhyChoose />

            <Project />
            <Team />
        </>
    )
}
