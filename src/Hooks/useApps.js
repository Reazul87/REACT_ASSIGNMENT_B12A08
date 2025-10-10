import { useEffect, useState } from "react";

const useApps = () => {
  const [appStore, setAppStore] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("../StoreApps.json")
      .then((response) => response.json())
      .then((app) => {
        setAppStore(app);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { appStore, loading, error };
};

export default useApps;
