import React from "react";
import Input from "../../components/common/Form/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Error from "../../components/common/Form/Error";
import { schema } from "./LoginValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/Reducers/Login";

const Login = () => {
  const dispatch = useDispatch();
  const { hasLoggedin } = useSelector((state) => state.login);

  const navigate = useNavigate();

  if (hasLoggedin) {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-4/5 p-6 m-auto bg-white rounded-md shadow-xl shadow-gray-600/40 ring  ring-gray-600 lg:max-w-xl md:max-w-md sm:max-w-sm">
        <h1 className="text-lg font-semibold text-center text-gray-700 uppercase md:text-3xl">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="email"
            type="email"
            register={register}
            renderError={() => <Error message={errors.email?.message} />}
          />
          <Input
            label="name"
            type="text"
            register={register}
            renderError={() => <Error message={errors.name?.message} />}
          />
          <Input
            label="image"
            type="file"
            register={register}
            renderError={() => <Error message={errors.image?.message} />}
          />
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
