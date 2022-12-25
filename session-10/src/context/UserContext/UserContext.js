import { createContext, useContext, useState, useRef } from "react";
import useGitHubMembersByCity from "../../hooks/useGithubMembersByCity";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const ref = useRef();

  const [searchText, setSearchText] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { data, loading } = useGitHubMembersByCity(selectedCity);

  const handleSearchText = () => {
    setSearchText(ref.current.value);
  };

  return (
    <UserContext.Provider
      value={{
        reference: ref,
        searchText,
        setSearchText,
        selectedCity,
        setSelectedCity,
        selectedState,
        setSelectedState,
        data,
        loading,
        handleSearchText,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
