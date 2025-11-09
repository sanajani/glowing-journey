const LocationSeparator = () => (
  <span aria-hidden="true" className="mx-1">•</span>
);

const Location = ({data}) => {
    if(!data) return <h1>There is no daat</h1>
  return (
    <div className="flex flex-wrap items-baseline text-[16px] md:text-lg mt-2">
        <span>{data.location.province} ، {data.location.city}</span>
        <LocationSeparator />
        <span>{data.location.district}</span>
        <LocationSeparator />
        <span>{data.location.streetAddress}</span>
        {data?.location?.landmark && (
            <>
            <LocationSeparator />
            <span>({data.location.landmark})</span>
            </>
        )}
    </div>
  )
}

export default Location