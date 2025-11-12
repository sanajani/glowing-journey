
const HouseFormInput = ({onChange, id, placeholder, className, ...props}) => {
  return (
    <input 
        {...props}
        id={id}
        onChange={onChange}
        className={`
              border border-gray-300 w-full text-black outline-none bg-white text-base px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors
          ${className}`}
        placeholder={placeholder}
     />
  )
}

export default HouseFormInput