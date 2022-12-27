import { useThemeContext } from "../../../context/ThemeContext/ThemeContext";

const Loader = () => {
  const { isLight } = useThemeContext();
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div
        className={`border-t-transparent border-solid animate-spin  rounded-full ${
          isLight ? "border-blue-400" : "border-white"
        } border-4 h-24 w-24`}
      ></div>
    </div>
  );
};

export default Loader;
