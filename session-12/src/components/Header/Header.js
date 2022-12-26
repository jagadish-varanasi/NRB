import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import { logout } from "../../store/Reducers/Login";
import { useUserContext } from "../../context/UserContext/UserContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import Button from "../common/Button";

function Header() {
  const { theme, setTheme } = useThemeContext();
  const { reference, handleSearchText } = useUserContext();

  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const isLight = theme === "light";

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
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchText();
        }}
      >
        <input
          className="py-1.5 px-8 my-2 rounded-lg outline-none cursor-pointer"
          placeholder="Search"
          ref={reference}
        />
        <Button name="Search" type="submit" />
      </form>
      <div className="flex items-center gap-10">
        <Button name={themeButton} handleClick={toggleTheme} />
        <div
          className={isLight ? "text-yellow-300" : "text-white"}
        >{`Welcome ${user.name} !!`}</div>
        <img src={user.image} alt="logo" width="40px" height="40px" />
        <Button name={"Logout"} handleClick={() => dispatch(logout())} />
      </div>
    </div>
  );
}

export default Header;
