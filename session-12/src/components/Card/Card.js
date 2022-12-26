import { useThemeContext } from "../../context/ThemeContext/ThemeContext";

const Card = ({ member: { login, avatar_url, html_url } }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`min-w-[300px] p-8 flex items-center justify-center gap-8 m-2 ${
        theme == "light" ? "bg-gray-400" : "bg-gray-300"
      }`}
    >
      <img src={avatar_url} alt="member" width="70px" height="70px" />
      <div>
        <div>{login}</div>
        <a href={html_url}>Github link</a>
      </div>
    </div>
  );
};

export default Card;
