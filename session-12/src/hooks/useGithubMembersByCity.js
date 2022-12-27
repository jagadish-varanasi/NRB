import { useEffect, useState } from "react";
import { getGithubMembersByCity } from "../services/githubMembersByCity";

const useGitHubMembersByCity = (selectedCity) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const data = await getGithubMembersByCity(selectedCity);
      setData(data);
    } catch {
      alert("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [selectedCity]);

  return { loading, data: data };
};

export default useGitHubMembersByCity;
