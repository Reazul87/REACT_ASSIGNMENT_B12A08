import appError from "../Assets/App-Error.png";
const NotFound = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <div className="flex-1 bg-[#a2abb305] py-20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center">
            <img src={appError} alt="App-Error.png" />
          </div>
          <div className="space-y-4 ">
            <h2 className="text-5xl font-semibold">OPPS!! APP NOT FOUND</h2>
            <p className="text-xl text-[#627382]">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
