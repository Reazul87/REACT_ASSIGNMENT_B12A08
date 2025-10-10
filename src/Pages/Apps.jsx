import { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import appError from "../Assets/App-Error.png";

const Apps = () => {
  const { appStore, loading } = useApps();
  const [search, setSearch] = useState("");

  const trim = search.trim().toLowerCase();
  const searched = trim
    ? appStore.filter((app) => app.title.toLowerCase().includes(trim))
    : appStore;

  return (
    <div className="container mx-auto py-5 md:py-15">
      <div className="text-center mb-5 md:mb-10 space-y-2.5 px-5">
        <h2 className="text-2xl md:text-5xl font-bold">Our All Applications</h2>
        <p className="text-[#627382] text-sm md:text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center py-5 md:px-0 px-2.5 gap-4">
        <h2 className="font-semibold text-xl md:text-2xl">
          ({searched.length}) Apps Found
        </h2>
        <label className="input flex items-center gap-2 border rounded-lg px-3 py-2 shadow-sm">
          <svg
            className="h-5 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            id="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
            className="outline-none bg-transparent flex-1"
          />
        </label>
      </div>
      {searched.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-5">
          {searched.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-16 gap-5">
          <div className="flex justify-center items-center">
            <img className="h-28 md:h-52" src={appError} alt="App-Error.png" />
          </div>
          <div className="md:space-y-4 space-y-2.5 text-center">
            <h2 className="text-xl md:text-3xl font-semibold">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="text-sm md:text-xl text-[#627382] px-2.5">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
