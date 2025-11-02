
const SelectBox = ({listOfSelectBoxValues,firstOptionValueShowed,containerStyle='',...props}) => {
  return (
        <select 
        {...props}
        aria-label={firstOptionValueShowed}
             className={`border border-gray-300 w-full text-black outline-none bg-white text-base px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${containerStyle}`} 
        >
        <option value="">{firstOptionValueShowed}</option>
        {
            listOfSelectBoxValues?.map(({id, label, value}) => {
               return <option key={id} value={value}>{label}</option>
            })
        }
    </select>
  )
}

export default SelectBox
