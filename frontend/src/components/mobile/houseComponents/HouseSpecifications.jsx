
// const HouseSpecifications = ({details, className=''}) => {
//     if(!details) return <h1>Something went wrong</h1>
//     const specifications = [
//     { key: 'bedrooms', label: 'اطاق خواب', value: details?.bedrooms, unit: 'خواب' },
//     { key: 'bathroom', label: 'حمام', value: details?.bathroom, unit: 'حمام' },
//     { key: 'area', label: 'متراژ', value: details?.area, unit: 'متراژ' },
//     { 
//       key: 'floor', 
//       label: 'طبقه', 
//       value: details?.floor ? `${details.totalFloor}/${details.floor}` : null,
//       unit: 'طبقه'
//     },
//     { key: 'yearBuild', label: 'سال ساخت', value: details?.yearBuild, unit: 'سال ساخت' },
//     { key: 'furnished', label: 'مبله', value: details?.furnished, unit: 'مبله' },
//     { key: 'parking', label: 'پارکینگ', value: details?.parking, unit: 'پارکینگ' },
//     { key: 'security', label: 'امنیت', value: details?.security, unit: 'امنیت' },
//   ];
//   return (
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {
//             specifications.map(({key, label, value, unit}) => (
//                 <div key={key} className="bg-gray-50 text-gray-700 p-3">
//                     <p className="text-sm mb-1">{label}</p>
//                     <p className="font-bold">
//                     {value} <span>{unit}</span>
//                     </p>
//                 </div>)
//             )
//         }      
//     </div>
//   )
// }

// export default HouseSpecifications





const HouseSpecifications = ({details, className=''}) => {
    if(!details) return <h1>Something went wrong</h1>
    const specifications = [
    { key: 'bedrooms', unit: 'اطاق خواب', value: details?.bedrooms, label: '🛏️' },
    { key: 'bathroom', unit: 'حمام', value: details?.bathroom, label: '🚿' },
    { key: 'area', unit: 'متراژ', value: details?.area, label: '📐' },
    { 
      key: 'floor', 
      unit: 'طبقه', 
      value: details?.floor ? `${details.totalFloor}/${details.floor}` : null,
      label: '🏢'
    },
    { key: 'yearBuild', unit: 'سال ساخت', value: details?.yearBuild, label: '📅' },
    { key: 'furnished', unit: 'مبله', value: details?.furnished, label: '🪑' },
    { key: 'parking', unit: 'پارکینگ', value: details?.parking, label: '🅿️' },
    { key: 'security', unit: 'امنیت', value: details?.security, label: '🔒' },
  ];
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {
            specifications.map(({key, label, value, unit}) => (
                <div key={key} className="bg-gray-50 text-gray-700 p-3">
                    <p className="text-sm mb-1">{label}</p>
                    <p className="font-bold">
                    {value} <span>{unit}</span>
                    </p>
                </div>)
            )
        }      
    </div>
  )
}

export default HouseSpecifications

