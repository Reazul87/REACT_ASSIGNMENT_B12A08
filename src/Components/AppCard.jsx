import { NavLink } from "react-router";
import imgDownloads from "../Assets/icon-downloads.png";
import imgRatings from "../Assets/icon-ratings.png";

const AppCard = ({ app }) => {
  const { id, image, title, ratingAvg, downloadsAvg } = app;

  return (
    <NavLink to={`/app-details/${id}`} className="h-full">
      <div className="card bg-base-100 hover:scale-102 ease-in-out shadow-sm border border-gray-100 h-full">
        <figure className="p-4 md:p-5 h-78 overflow-hidden">
          <img
            className="rounded-2xl shadow-sm w-full h-full object-cover"
            src={image}
            alt={image}
          />
        </figure>
        <div className="flex flex-col gap-2 p-3 md:p-5 flex-grow">
          <h2 className="text-xl font-medium text-left">{title}</h2>
          <div className="flex items-center justify-between mt-auto">
            <div className="bg-[#F1F5E8] rounded-sm font-medium text-[#00D390] flex items-center gap-2 px-2.5 py-1.5">
              <img className="h-4" src={imgDownloads} alt="icon-downloads.png" />
              <span> {downloadsAvg}</span>
            </div>
            <div className="bg-[#FFF0E1] flex items-center rounded-sm font-medium text-[#FF8811] px-2.5 py-1.5 gap-2">
              <img
                src={imgRatings}
                className="h-4"
                alt="icon-ratings.png"
              />
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default AppCard;
