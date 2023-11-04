import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import About from './components/about/About'
import Service from './components/service/Service'
import WhyChoose from './components/WhyChoose.tsx/WhyChoose'
import Price from './components/price/Price'
import Team from './components/team/Team'
import Benifits from './components/benifits/Benifits'
import Project from './components/project/Project'
import Faq from './components/Faq/Faq'
import CallAction from './components/callaction/CallAction'
import Testimonial from './components/testimonial/Testimonial'
import WhyChoose2 from './components/whychoose2/WhyChoose2'
import NewSection from './components/newssection/NewsSection'
import ClientSection from './components/clientsection/ClientSection'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import Header2 from './components/header/Header2'
import Header4 from './components/header/Header4'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PricePage from './pages/PricePage'
import ShopCart from './pages/ShopCartPage'
import ShopCartPage from './pages/ShopCartPage'
import ShopCHeckOutPage from './pages/ShopCHeckOutPage'
import ShopProductDetailsPage from './pages/ShopProductDetailsPage'
import ShopProductsPage from './pages/ShopProductsPage'
import ProductSideBar from './pages/ProductSideBar'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import ProjectsPage from './pages/ProjectsPage'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import ServicesPage from './pages/ServicesPage'
import TeamDetailsPage from './pages/TeamDetailsPage'
import TeamsPage from './pages/TeamsPage'
import TestimonialPage from './pages/TestimonialPage'
import NewsPage from './pages/NewsPage'
import NewsGrid from './pages/NewsGrid'
import Page404 from './pages/Page404'
import HomePage from './pages/HomePage'
import TableComponent from './components/tableComponent/TableComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="page-wrapper">
{/* <!-- Preloader --> */}
{/* <div className="preloader"></div> */} 
    {/* ----pages---- */}
   {/* <HomePage/>  */}
    {/* <AboutPage/> */}
   {/* <ContactPage/>  */}
    {/* <PricePage/> */}
    {/* <TableComponent/> */}

{/* <ShopCartPage/> */}
{/* <ShopCHeckOutPage/> */}
{/* <ShopProductDetailsPage/> */}
{/* <ShopProductsPage/> */}
{/* <ProductSideBar/> */}
{/* <ProjectDetailsPage/> */}
{/* <ProjectsPage/> */}
{/* <ServiceDetailsPage/> */}
{/* <ServicesPage/> */}
{/* <TeamDetailsPage/> */}
{/* <TeamsPage/> */}
{/* <TestimonialPage/> */}
{/* <NewsPage/> */}
{/* <NewsGrid/> */}
{/* <Page404/> */}
    </div>
    </>
  )
}

export default App
