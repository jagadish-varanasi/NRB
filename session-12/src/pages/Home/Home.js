import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import SelectBox from "../../components/SelectBox/SelectBox";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import Loader from "../../components/common/Loader";
import NoData from "../../components/common/NoData";

const Home = () => {
  const { theme } = useThemeContext();
  const { data, loading, searchText } = useUserContext();

  const filteredMembers = data?.filter((member) => {
    if (searchText === "") return member;
    else if (
      (member.name ?? member.login)
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    ) {
      return member;
    }
  });

  return (
    <div
      className={`min-h-[100vh] ${
        theme == "dark" ? "bg-gray-600" : " bg-white"
      }`}
    >
      <Header />
      <SelectBox />
      <div className="mt-6 flex flex-wrap gap-2.5 justify-center">
        {loading ? (
          <Loader />
        ) : !data.length ? (
          <NoData />
        ) : filteredMembers.length ? (
          filteredMembers.map((member) => (
            <Card key={member.login} member={member} />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Home;
