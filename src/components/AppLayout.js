import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Body from './Body'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import RestaurantMenu from './RestaurantMenu'
//import Grocery from './Grocery'

const Grocery = lazy(() => import("./Grocery"))

export default function AppLayout() {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h3>Loading....</h3>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)