import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import TvShows from "./components/pages/TvShows";

import More from "./components/pages/More";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";


export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/Movies',
                element: <Movies />
            },
            {
                path:'/TvShows',
                element: <TvShows />
            },
            {
                path:'/More',
                element: <More />
            },
            {
                path:'/Login',
                element: <Login/>
            },
            {
                path:'/SignUp',
                element: <SignUp />
            },
        ]
    }
])