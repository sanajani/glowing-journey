
const Amenities = ({amenities}) => {
    if(!amenities) return <h1>Something went wrong</h1>
  return (
        <div className="flex flex-wrap">
          {amenities.map((amenit, index) => {
            return (
              <span key={amenit} className="m-1 rounded-full px-2 py-1 text-blue-700 bg-blue-100 text-sm">
                {amenit}
              </span>
            );
          })}
        </div>
  )
}

export default Amenities