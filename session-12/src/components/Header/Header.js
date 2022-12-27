import { useSelector, useDispatch } from "react-redux";
import {
  SunIcon,
  MoonIcon,
  ArrowRightCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import logo from "../../assets/logo.png";
import { logout } from "../../store/Reducers/Login";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import Button from "../common/Button";

function Header() {
  const { isLight, setTheme } = useThemeContext();
  const { reference, handleSearchText } = useUserContext();

  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const themeButton = isLight ? "Dark" : "Light";

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <div
      className={`p-4 flex justify-between items-center ${
        isLight ? "bg-gray-600" : "bg-gray-800"
      }`}
    >
      <img src={logo} alt="logo" width="40px" height="40px" />
      <form
        className="flex items-center gap-2 bg-white rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchText();
        }}
      >
        <input
          className="px-8 my-1 outline-none"
          placeholder="Search"
          ref={reference}
        />
        <button name="Search" type="submit">
          <MagnifyingGlassIcon className="h-6 w-6 mr-4" />
        </button>
      </form>
      <div className="flex items-center gap-10">
        {isLight ? (
          <MoonIcon onClick={toggleTheme} className="custom-icons" />
        ) : (
          <SunIcon onClick={toggleTheme} className="custom-icons" />
        )}
        <div
          className={`animate-pulse ${
            isLight ? "text-yellow-300" : "text-white"
          }`}
        >{`Hey ${user.name} !`}</div>
        <img src={user.image} alt="logo" className="h-12 w-12 rounded-full" />
        <ArrowRightCircleIcon
          onClick={() => dispatch(logout())}
          className="custom-icons"
        />
      </div>
    </div>
  );
}

export default Header;
