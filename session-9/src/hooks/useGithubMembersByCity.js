import { useEffect, useState } from "react";

const useGitHubMembersByCity = (selectedCity) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Hello");
    (async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/search/users?q=location:${selectedCity}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    })();
  }, [selectedCity]);

  return { loading, data: data?.items };
};

export default useGitHubMembersByCity;
