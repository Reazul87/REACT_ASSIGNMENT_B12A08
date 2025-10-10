import { NavLink } from "react-router";
import facebook from "../Assets/facebook.png"
import twitter from "../Assets/twitter.png";
import linkedin from "../Assets/linkedin.png";
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto py-6 md:py-10">
        <div className="flex md:flex-row md:justify-between flex-col justify-center items-center gap-4">
          <NavLink to={"/"} className="flex items-center h-6 lg:h-8 gap-1.5">
            <img src={logo} className="h-full" />
            <h2 className="text-md lg:text-xl font-bold">HERO.IO</h2>
          </NavLink>
          <div>
            <h6 className="text-md text-xl font-medium mb-2.5">Social Links</h6>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin.icon" />
              </a>
              <a
                href="https://www.twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twitter.icon" />
              </a>
              <a
                href="https://www.facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook.icon" />
              </a>
            </div>
          </div>
        </div>
        <hr className="mb-5 mt-1 border-t-2 border-gray-500" />
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
