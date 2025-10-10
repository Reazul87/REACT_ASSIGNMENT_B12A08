import { Menu } from "lucide-react";
import { NavLink } from "react-router";
import logo from "../Assets/logo.png";
import github from "../Assets/github.png";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-2"
            >
              <Menu className="h-5 lg:h-7" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apps"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"/installation"}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className="flex items-center h-6 lg:h-8 gap-1.5">
            <img src={logo} className="h-full" />
            <h2 className="text-md lg:text-xl font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </h2>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/apps"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/installation"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/Reazul87/REACT_ASSIGNMENT_B12A08.git"
            className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white rounded-sm lg:btn-lg btn-sm font-semibold"
            target="_blank"
          >
            <img src={github} alt="github.icon" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
