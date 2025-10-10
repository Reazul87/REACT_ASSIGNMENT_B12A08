const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#a2abb305] text-[#632EE3] w-screen container mx-auto">
      <div className="w-16 h-16 border-4 border-t-[#4400e2] border-gray-500 rounded-full animate-spin"></div>
      <h2 className="mt-6 text-xl md:text-3xl font-semibold animate-pulse">
        Loading, please wait...
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-2">
        Fetching the latest apps for you
      </p>
    </div>
  );
};

export default LoadingPage;
