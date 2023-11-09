import { lazy, Suspense } from "react"
import { Outlet, Navigate, useRoutes } from "react-router-dom"

import Layout from "layouts"

export const HomePage = lazy(() => import("pages/HomePage"))
export const AboutPage = lazy(() => import("pages/AboutPage"))
export const ContactPage = lazy(() => import("pages/ContactPage"))
export const PricePage = lazy(() => import("pages/PricePage"))
export const ShopCart = lazy(() => import("pages/ShopCartPage"))
export const ShopCartPage = lazy(() => import("pages/ShopCartPage"))
export const ShopCHeckOutPage = lazy(() => import("pages/ShopCHeckOutPage"))
export const ShopProductDetailsPage = lazy(() => import("pages/ShopProductDetailsPage"))
export const ShopProductsPage = lazy(() => import("pages/ShopProductsPage"))
export const ProductSideBar = lazy(() => import("pages/ProductSideBar"))
export const ProjectDetailsPage = lazy(() => import("pages/ProjectDetailsPage"))
export const ProjectsPage = lazy(() => import("pages/ProjectsPage"))
export const ServiceDetailsPage = lazy(() => import("pages/ServiceDetailsPage"))
export const ServicesPage = lazy(() => import("pages/ServicesPage"))
export const TeamDetailsPage = lazy(() => import("pages/TeamDetailsPage"))
export const TeamsPage = lazy(() => import("pages/TeamsPage"))
export const TestimonialPage = lazy(() => import("pages/TestimonialPage"))
export const NewsPage = lazy(() => import("pages/NewsPage"))
export const NewsGrid = lazy(() => import("pages/NewsGrid"))
export const Page404 = lazy(() => import("pages/Page404"))

// ----------------------------------------------------------------------

const Loader = () => {
    return <div className="preloader"></div>
}

// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            element: (
                <Layout>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Layout>
            ),
            children: [
                { element: <HomePage />, index: true },
                { path: "about", element: <AboutPage /> },
                { path: "contact-us", element: <ContactPage /> },
                {
                    path: "products",
                    children: [
                        { element: <ShopProductsPage />, index: true },
                        { path: ":productId", element: <ShopProductDetailsPage /> },
                    ],
                },
                {
                    path: "news",
                    children: [
                        { element: <NewsGrid />, index: true },
                        { path: ":newsId", element: <NewsPage /> },
                    ],
                },
            ],
        },
        {
            path: "*",
            element: <Page404 />,
        },
        // {
        //     path: "*",
        //     element: <Navigate to="/404" replace />,
        // },
    ])

    return routes
}
