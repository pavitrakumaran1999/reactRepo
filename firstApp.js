import React, {Suspense,lazy} from "react";
import ReactDOM from "react-dom/client";
import Body from "./Src/Component/Body";
import RestaruntCard from "./Src/Component/RestaruntCard";
import Header from "./Src/Component/Header";
import { createBrowserRouter ,RouterProvider, Outlet } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Contact from "./Src/Component/Contact";
import About from "./Src/Component/About";
import ErrorPage from "./Src/Component/ErrorPage";
import RestaurantMenu from "./Src/Component/RestaurantMenu";
import AboutClass from "./Src/Component/AboutClass";
//import Grocery from "./Src/Component/Grocery";

const Grocery=lazy (() => import("./Src/Component/Grocery"));
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};
const appRouter= createBrowserRouter(
    [
        {
            path :"/",
            element : <AppLayout />,
            children : [
                {
                    path :"/",
                    element :<Body />
                },
                {
                    path:"/about",
                    element :<About/>
                },
                {
                    path:"/contact",
                    element :<Contact />
                },
                {
                    path:"/grocery",
                    element:<Suspense fallback={<h1>loading.....</h1>}><Grocery/></Suspense>
                },
                {
                    path:"/restaurant/:restId",
                    element:<RestaurantMenu/>
                }
            ],
            errorElement : <ErrorPage/>
        },
        
    ]
);


const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter}/>);