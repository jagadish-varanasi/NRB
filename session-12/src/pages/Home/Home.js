import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import SelectBox from "../../components/SelectBox/SelectBox";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import Loader from "../../components/common/Loader";
import NoData from "../../components/common/NoData";

const Home = () => {
  const { isLight } = useThemeContext();
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

  const isNoData = !filteredMembers.length;

  return (
    <div className={`min-h-[100vh] ${isLight ? "bg-white" : " bg-gray-600"}`}>
      <Header />
      <SelectBox />
      <div className="mt-6 flex flex-wrap gap-2.5 justify-center">
        {loading ? (
          <Loader />
        ) : isNoData ? (
          <NoData />
        ) : (
          filteredMembers.map((member) => (
            <Card key={member.login} member={member} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
