import { NavLink } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import imgError from "../Assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1 bg-[#e0e0e033] py-20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center">
            <img src={imgError} alt="error-404.png" />
          </div>
          <div className="space-y-4 ">
            <h2 className="text-5xl font-semibold">Oops, page not found!</h2>
            <p className="text-xl">
              The page you are looking for is not available.
            </p>
            <NavLink
              to={"/"}
              className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white rounded-sm lg:btn-lg btn-sm font-semibold"
            >
              Go Back!
            </NavLink>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
