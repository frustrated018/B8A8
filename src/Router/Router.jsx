import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CampaignDetails from "../Components/CampaignDetails/CampaignDetails";
import ErrorPage from "../Pages/Error/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        loader: () => fetch('/campaigns.json'),
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch('/campaigns.json')
            },
            {
                path: "/Donation",
                element:<Donation></Donation>
            },
            {
                path: "/Statistics",
                element:<Statistics></Statistics>,
            },
            {
                path: "/campaign/:id",
                element:<CampaignDetails></CampaignDetails>,
                loader: () => fetch('/campaigns.json')
            }
        ]
    }
])

export default Router;