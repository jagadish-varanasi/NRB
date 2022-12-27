import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";

const Card = ({ member: { login, avatar_url, html_url } }) => {
  const { isLight } = useThemeContext();
  return (
    <div
      className={`min-w-[300px] flex items-center justify-center gap-8 m-2 border border-gray-200 shadow-lg ${
        isLight ? "bg-gray-400" : "bg-gray-300"
      }`}
    >
      <img src={avatar_url} alt="member" width="127px" height="100%" />
      <div className="p-8">
        <div>{login}</div>
        <a
          href={html_url}
          target="_blank"
          className="flex gap-1 mt-1 items-center"
        >
          <span>GitHub</span>
          <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-600" />
        </a>
      </div>
    </div>
  );
};

export default Card;
