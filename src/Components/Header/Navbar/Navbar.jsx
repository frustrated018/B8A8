import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row  justify-between items-center py-4 pt-10">
        <Logo></Logo>
        <ul className=" flex flex-col md:flex-row gap-3 md:gap-12 mt-6  md:mt-0">
          <li className="text-neutral-950 text-lg font-normal">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-red-500 underline font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-neutral-950 text-lg font-normal">
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-red-500 underline font-bold"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="text-neutral-950 text-lg font-normal">
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-red-500 underline font-bold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
