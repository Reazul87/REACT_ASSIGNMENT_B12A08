import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";
import LoadingPage from "../Components/LoadingPage";
import ErrorPage from "./ErrorPage";
import imgDownloads from "../Assets/icon-downloads.png";
import imgRatings from "../Assets/icon-ratings.png";
import imgReview from "../Assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const { appStore, loading } = useApps();

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  const app = appStore.find((app) => app.id === Number(id));

  if (!app) {
    return <ErrorPage></ErrorPage>;
  }

  const {
    image,
    companyName,
    ratingAvg,
    downloadsAvg,
    title,
    totalReviews,
    size,
    description,
    ratings,
  } = app;

  const handleInstall = () => {
    const isExist = JSON.parse(localStorage.getItem("install"));
    let updateStore = [];
    if (isExist) {
      const duplicate = isExist.some((a) => a.id === app.id);
      if (duplicate) {
        return toast.warning(`${title} is already installed`);
      } else {
        updateStore = [...isExist, app];
        toast.success(`${title} successfully installed.`);
      }
    } else {
      toast.success(`${title} successfully installed.`);
      updateStore.push(app);
    }
    localStorage.setItem("install", JSON.stringify(updateStore));
  };

  return (
    <div className="flex flex-col gap-4 md:gap-10 py-2.5 md:py-5 container mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-4">
        <div className="w-70 mx-auto md:w-80">
          <img
            className="md:w-full object-cover rounded-xl"
            src={image}
            alt={image}
          />
        </div>
        <div className="flex flex-col border-red-950 flex-1 px-4 py-2">
          <div>
            <h2 className="md:text-3xl te font-bold">{title}</h2>
            <p className="md:text-xl text-sm">{companyName}</p>
          </div>
          <div className="divider text-[#fff564]"></div>
          <div className="flex flex-col gap-5 md:gap-7">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="space-y-2">
                <img
                  className="md:h-10 h-6"
                  src={imgDownloads}
                  alt="icon-downloads.png"
                />
                <h4 className="text-[#001931]">Downloads</h4>
                <h2 className="font-extrabold md:text-4xl">{downloadsAvg}</h2>
              </div>
              <div className="space-y-2">
                <img
                  className="md:h-10 h-6"
                  src={imgRatings}
                  alt="icon-ratings.png"
                />
                <h4 className="text-[#001931]">Average Ratings</h4>
                <h2 className="font-extrabold md:text-4xl">{ratingAvg}</h2>
              </div>
              <div className="space-y-2">
                <img
                  className="md:h-10 h-6"
                  src={imgReview}
                  alt="icon-review.png"
                />
                <h4 className="text-[#001931]">Total Reviews</h4>
                <h2 className="font-extrabold text-xl md:text-4xl">
                  {totalReviews}
                </h2>
              </div>
            </div>
            <button
              onClick={handleInstall}
              className="btn w-50 bg-gradient-to-br from-[#00D390] to-[#9F62F2] text-white rounded-sm font-semibold"
            >
              Install Now ({`${size} MB`})
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-4 mx-4">
        <h2 className="text-lg md:text-2xl font-semibold py-2">Ratings</h2>
        <div className="rounded-xl h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              width={500}
              height={300}
              data={ratings}
              margin={{
                top: 5,
                right: 60,
                left: 6,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="count" type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip
                cursor={{ fill: "rgba(200, 200, 200, 0.2)" }}
                formatter={(value, name) => [`${value}`, "Total Ratings"]}
              />
              <Legend />
              <Bar
                dataKey="count"
                fill="#FF8811"
                activeBar={<Rectangle fill="pink" stroke="cyan" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4 py-2">
          <h2 className="text-lg md:text-2xl font-semibold">Description</h2>
          <p className="text-[#627382] text-sm md:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
