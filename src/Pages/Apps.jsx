import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import LoadingPage from "../Components/LoadingPage";
import NotFound from "./NotFound";
const Apps = () => {
  const { appStore, loading } = useApps();
  const [search, setSearch] = useState("");

  const trim = search.trim().toLocaleLowerCase();
  const searched = trim
    ? appStore.filter((app) => app.title.toLocaleLowerCase().includes(trim))
    : appStore;

  if (loading) {
    return <LoadingPage />;
  }
  if (searched.length === 0) {
    return <NotFound />;
  }

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
        <label className="input">
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
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-5">
        {searched.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};
export default Apps;
