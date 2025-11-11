// components/form/FormField.jsx
import ErrorText from "../ErrorText";

const FormField = ({
  label,
  type = "text",
  id,
  placeholder,
  register,
  error,
  className = "",
  ...inputProps
}) => {
  return (
    <div className="md:space-y-2 space-y-1 text-right">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mr-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent transition-all duration-200 text-lg ${className}`}
        {...register(id)}
        {...inputProps}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

export default FormField;