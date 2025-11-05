/* Pllaning to implement RestaurantsApp.js
    1. Header   
        - Logo
        - Nav Items (Right side)
        - Cart
    2. Body
        - Search Bar
        - Restaurant List
            - Restaurant Card (many cards)
    3. Footer
        -copyrights
        -links
        -address
        -contact    
*/

import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import BodyWithApiCall from "./components/BodyWithApiCall";
import {lazy,Suspense, use} from "react"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoggedInUserContext from "./utils/LoggedInUserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

import { useState, useEffect } from "react";

// lazy loading // ondemand loading 
// lazy is named export from react , it takes callback function use the function import which takes path of the compoenet 
const Grocery = lazy(()=> import('./components/Grocery'))




const AppLayout = () => {
const [user, setUser] = useState({ name: "Guest", email: "" });

useEffect(() => {
    // api call to fetch the user data 
    const data = { name: "Archana Manju" };
    setUser(prev => ({ ...prev, name: data.name }));
}, []);

    return (
    <>
    {/* wrapping the entier app with redux provider to provide the store to entire app */}
    <Provider store={appStore}>  
    {/* context provide using  user context provider*/}
        <LoggedInUserContext.Provider value={{ user, setUser }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </LoggedInUserContext.Provider>
    </Provider>
    </>
    );
}

const appRouter = createBrowserRouter([
    {  
        path:'/',
        element:<AppLayout />, 
        children:[
            {
                path:'/',
                element:<BodyWithApiCall/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                //dynamic routing
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            },

            {
                //dynamic routing
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading....</h1>} > <Grocery/></Suspense>
            },
               {
                //dynamic routing
                path:'/cart',
                element:<Cart/>
            },
        ],
        errorElement:<Error/>
    },


])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
/* 
For routing we need to replace above line with below line
1. create a browser router using createBrowserRouter
2. wrap the appLayout with RouterProvider and pass the created router as props
*/
 root.render(<RouterProvider router={appRouter} />);