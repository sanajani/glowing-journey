
const HouseFormLabel = ({className, text, htmlFor,...props}) => {
  return (
    <label {...props} className={`className="block text-sm font-medium mb-1 text-gray-700"  ${className}`} htmlFor={htmlFor}>{text}</label>
  )
}

export default HouseFormLabel