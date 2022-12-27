import { useEffect, useState } from "react";
import { getGithubMembersByCity } from "../services/githubMembersByCity";

const useGitHubMembersByCity = (selectedCity) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getGithubMembersByCity(selectedCity);
        setData(data);
      } catch {
        alert("Something went wrong!!");
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedCity]);

  return { loading, data: data };
};

export default useGitHubMembersByCity;
