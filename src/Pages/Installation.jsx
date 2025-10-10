import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import imgRatings from "../Assets/icon-ratings.png"
import imgDownloads from "../Assets/icon-downloads.png";
import appError from "../Assets/App-Error.png";
import { toast } from "react-toastify";

const Installation = () => {
  const [installApp, setInstallApp] = useState([]);
  const [size, setSize] = useState("none");

  useEffect(() => {
    const storedApp = JSON.parse(localStorage.getItem("install")) || [];
    setInstallApp(storedApp);
  }, []);

  const sortBySize = (() => {
    if (size == "size-asc") {
      return [...installApp].sort((a, b) => Number(a.size) - Number(b.size));
    } else if (size == "size-desc") {
      return [...installApp].sort((a, b) => Number(b.size) - Number(a.size));
    } else {
      return installApp;
    }
  })();

  const handleRemove = (id) => {
    const storedApp = JSON.parse(localStorage.getItem("install")) || [];
    const appSingle = storedApp.filter((a) => a.id !== id);
    localStorage.setItem("install", JSON.stringify(appSingle));
    setInstallApp(appSingle);
    toast.success("App Uninstalled Successfully!");
  };

  return (
    <div className="container mx-auto py-5 md:py-15">
      <div className="text-center mb-5 md:mb-10 space-y-2.5">
        <h2 className="font-bold text-2xl md:text-5xl">Your Installed Apps</h2>
        <p className="text-[#627382] text-sm md:text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center py-5 md:px-0 px-2.5 gap-3">
        <h2 className="font-semibold text-xl md:text-2xl">
          ({sortBySize.length}) Apps Found
        </h2>
        <label className="form-control w-44 md:w-56">
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            id="Size"
            className="select selected-bordered"
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Size Low =&gt; High </option>
            <option value="size-desc">Size High =&gt; Low</option>
          </select>
        </label>
      </div>
      {!sortBySize.length ? (
        <div className="flex flex-col container mx-auto">
          <div className="flex-1 bg-[#a2abb305] py-20">
            <div className="text-center">
              <div className="flex justify-center items-center">
                <img
                  className="h-40"
                  src={appError}
                  alt="App-Error.png"
                />
              </div>
              <h2 className="text-4xl font-semibold">
                You did not install any apps
              </h2>
            </div>
          </div>
        </div>
      ) : (
        sortBySize.map((app) => (
          <div
            key={app.id}
            className="card bg-base-100 shadow-sm border border-gray-100 justify-between flex-row items-center mb-2.5"
          >
            <div className="p-3 md:p-5 flex space-x-2.5 items-center flex-row md:space-x-5">
              <figure className="overflow-hidden">
                <img
                  className="rounded-xl shadow-sm h-12 md:h-20 object-cover"
                  src={app.image}
                  alt={app.image}
                />
              </figure>
              <div className="md:hidden">
                <h2 className="md:text-xl font-medium text-sm">
                  {app.companyName}
                </h2>
              </div>
              <div className="space-y-4 md:block hidden">
                <h2 className="md:text-xl font-medium text-sm">{app.title}</h2>
                <div className="flex items-center w-50 justify-between">
                  <div className="bg-[#F1F5E8] rounded-sm font-medium text-[#00D390] flex items-center gap-2 px-2.5 py-1.5">
                    <img
                      className="h-4"
                      src={imgDownloads}
                      alt="icon-downloads.png"
                    />
                    <span> {app.downloadsAvg}</span>
                  </div>
                  <div className="bg-[#FFF0E1] flex items-center rounded-sm font-medium text-[#FF8811] px-2.5 py-1.5 gap-2">
                    <img
                      src={imgRatings}
                      className="h-4"
                      alt="icon-ratings.png"
                    />
                    <span>{app.ratingAvg}</span>
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              onClick={() => handleRemove(app.id)}
              className="btn bg-gradient-to-br from-[#00D390] to-[#9F62F2] text-white rounded-sm lg:btn-lg btn-sm font-semibold  m-3 md:m-5"
            >
              Uninstall
            </NavLink>
          </div>
        ))
      )}
    </div>
  );
};

export default Installation;
