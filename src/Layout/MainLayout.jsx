import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";
import Banner from "../Components/Header/Banner/Banner";

const MainLayout = () => {
  const locate = useLocation();

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


  return (
    <>
      {locate.pathname === "/" ? (
        <div
          style={{
            backgroundImage:
              'url("https://i.ibb.co/RgSB9M9/joel-muniz-A4-Ax1-Apccf-A-unsplash.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-white bg-opacity-90">
            <div className="max-w-[1300px] mx-auto">
              <Navbar />
              <Banner/>
            </div>
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
