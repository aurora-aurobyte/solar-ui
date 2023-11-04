import React from 'react'
import Service from '../components/service/Service'
import WhyChoose from '../components/WhyChoose.tsx/WhyChoose'
import About from '../components/about/About'
import Project from '../components/project/Project'
import Faq from '../components/Faq/Faq'
import Team from '../components/team/Team'
import Video from '../components/Video/Video'
import Footer from '../components/footer/Footer'
import TableComponent from '../components/tableComponent/TableComponent'
type Props = {}

export default function HomePage({ }: Props) {
  return (
    <>
      <About />
      <Video />
      <TableComponent/>
      <Service />
      <WhyChoose />
      
      <Project />
      <Team />
      <Footer address={'Jaffna office - No.100, Main Street Jaffna, Srilanka.'}
        email={'accessenergyeng@gmail.com'}
        number={'+94 212223829'}
        pNumber={'+94 771208700'}
        service={[
          { name: "SOLAR ELECTRICITY SYSTEMS ON-GRID", url: '' },
          { name: "SOLAR OFF-GRID", url: '' },
          { name: "SOLAR HYBRID SYSTEMS", url: '' },
          { name: "SOLAR HOTWATER SYSTEM", url: '' },
          { name: "SOLAR STREET LIGHTS", url: '' },
          { name: "SOLAR WATER PUMPING SYSTEM", url: '' },
          { name: "GREEN HOME AND CONSTRUCTION", url: '' },
          { name: "SECURITY CAMERA SYSTEM", url: '' }

        ]} />
    </>
  )
}