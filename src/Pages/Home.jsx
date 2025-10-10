import { NavLink } from "react-router";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";
import LoadingPage from "../Components/LoadingPage";
import imgHero from "../Assets/hero.png";
import imgGooglePlay from "../Assets/Google Play.png";
import imgAppStore from "../Assets/App Store.png";

const Home = () => {
  const { appStore, loading } = useApps();
  const sortedRating = [...appStore].sort((a, b) => b.downloads - a.downloads);
  const apps = sortedRating.slice(0, 8);

  return (
    <div className="bg-[#e0e0e033] text-center">
      <div className="flex flex-col gap-4 md:gap-10 px-5 py-2.5 md:px-40 md:py-20 container mx-auto">
        <div className="space-y-1.5 md:space-y-4">
          <h2 className="text-2xl md:text-7xl font-bold">
            We Build <br />
            <span className="text-[#632EE3]">Productive</span> Apps
          </h2>
          <p className="text-[#627382] text-sm md:text-xl">
            At HERO.IO we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="text-center space-x-1.5 md:space-x-2.5">
          <a
            href="https://play.google.com/"
            target="_blank"
            type="button"
            className="btn btn-ghost"
          >
            <img className="h-4" src={imgGooglePlay} alt="Google Play.png" />
            Google Play
          </a>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            type="button"
            className="btn btn-ghost"
          >
            <img className="h-4" src={imgAppStore} alt="App Store.png" />
            App Store
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-5">
          <img src={imgHero} alt="hero.png" />
        </div>
        <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  text-white w-full ">
          <div className="container mx-auto py-10 md:py-38">
            <h2 className="md:text-5xl font-bold md:mb-10 mb-6">
              Trusted by Millions, Built for You
            </h2>
            <div className="flex flex-col md:flex-row justify-between md:space-y-0 space-y-5">
              <div className="">
                <p>Total Downloads</p>
                <h2 className="md:text-6xl font-extrabold">29.6M</h2>
                <h4>21% more than last month</h4>
              </div>
              <div className="">
                <p>Total Reviews</p>
                <h2 className="md:text-6xl font-extrabold">906K</h2>
                <h4>46% more than last month</h4>
              </div>
              <div className="">
                <p>Active Apps</p>
                <h2 className="md:text-6xl font-extrabold">132+</h2>
                <h4>31 more will Launch</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 md:py-15">
        <div className="text-center mb-5 md:mb-10 space-y-2.5">
          <h2 className="font-bold text-2xl md:text-5xl">Trending Apps</h2>
          <p className="text-[#627382] text-sm md:text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {loading ? (
          <LoadingPage></LoadingPage>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-5">
            {apps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}
        <NavLink
          to={"/apps"}
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white rounded-sm lg:btn-lg btn-sm font-semibold mt-5 md:mt-10"
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
