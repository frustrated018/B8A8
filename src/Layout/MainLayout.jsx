import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect, useState } from "react";
import Banner from "../Components/Header/Banner/Banner";
import Home from "../Pages/Home/Home";

const MainLayout = () => {
  const locate = useLocation();
  const campaigns = useLoaderData();

  useEffect(() => {
    if (locate.pathname === "/") {
      document.title = `Donation Campaign/Home`;
    } else {
      document.title = `Donation Campaign${locate.pathname}`;
    }
    if (locate.state) {
      document.title = `${locate.state}`;
    }
  }, [locate.pathname, locate.state]);

  // for the search functionality

  // if no data is found
  const [noDataFound, setNoDataFound] = useState(false);

  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  const filterCampaigns = (searchTerm) => {
    const filtered = campaigns.filter((campaign) =>
      campaign.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCampaigns(filtered);

    if (filtered.length === 0) {
      // No data found for the search term
      setNoDataFound(true);
    } else {
      setNoDataFound(false);
    }
  };

  return (
    <>
      {locate.pathname === "/" ? (
        <div>
          <div
            style={{
              backgroundImage:
                'url("https://i.ibb.co/x1KRTKb/Rectangle-4281.png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-white bg-opacity-90">
              <div className="max-w-[1300px] mx-auto">
                <Navbar />
                <Banner filterCampaigns={filterCampaigns} />
              </div>
            </div>
          </div>
          <div className="max-w-[1300px] mx-auto">
            {noDataFound ? (
              <div className=" text-center my-14 text-4xl text-red-600">No Data Found</div>
            ) : (
              <Home
                campaigns={
                  filteredCampaigns.length > 0 ? filteredCampaigns : campaigns
                }
              />
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-[1300px] mx-auto">
          <Navbar />
        </div>
      )}
      <div className="max-w-[1300px] mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
