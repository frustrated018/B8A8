import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-4 mt-10">
        <Logo></Logo>
        <ul className=" flex gap-12 ">
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
              to="/donation"
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
              to="/statistics"
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
