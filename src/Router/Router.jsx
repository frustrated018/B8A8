import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/Error/ErrorPage";
import CampaignDetails from "../Components/CampaignDetails/CampaignDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch('/campaigns.json')
            },
            {
                path: "/donation",
                element:<Donation></Donation>
            },
            {
                path: "/statistics",
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