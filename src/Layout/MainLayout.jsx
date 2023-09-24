import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h2 className=" text-center text-3xl text-red-400 my-14">This is the main Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;