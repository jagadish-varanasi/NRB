const Input = ({ label, type, register, renderError }) => {
  return (
    <div className="mb-2">
      <label
        for={label}
        className="block text-sm font-semibold text-gray-800 capitalize"
      >
        {label}
      </label>
      <input
        name={label}
        type={type}
        {...register(label)}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      {renderError()}
    </div>
  );
};

export default Input;
