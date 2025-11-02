
const SelectBox = ({listOfSelectBoxValues,firstOptionValueShowed,containerStyle='',...props}) => {
  return (
        <select 
        {...props}
        aria-label={firstOptionValueShowed}
        className={`border w-full text-black outline-none bg-white text-base px-2 py-1 ${containerStyle}`}>
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
