import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
  const locate = useLocation();

  useEffect(() => {
    console.log(locate.pathname);

    if(locate.pathname === "/"){
        document.title = `Donation Campaign/Home`
    }else{
        document.title = `Donation Campaign${locate.pathname}`
    }


  }, [locate.pathname]);

  return (
    <div className="max-w-[1300px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
