const HouseFormSelect = ({id, className, options, ...props}) => {
  return (
    <select 
        {...props}
        className={`${className} border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500`}
        id={id}
        >
        {
            options?.length > 1 ? 
            options.map((sOption) => {
               return <option value={sOption} key={sOption}>{sOption}</option>
            })
            : 'داده ها کافی نیست'
        }
    </select>
  )
}

export default HouseFormSelect