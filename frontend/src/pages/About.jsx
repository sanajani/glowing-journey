// let imageaddress = 'https://a0.muscache.com/im/pictures/dc9f2e94-efda-4bd2-a0f4-2bde6152b9a9.jpg?im_w=1200'
// let imageaddress1 = 'https://a0.muscache.com/im/pictures/7f2f5963-3324-4996-8259-4fd06599992f.jpg?im_w=720'
// let imageaddress2 = 'https://a0.muscache.com/im/pictures/d3d082a1-2f0e-4772-8aa4-62468f245ceb.jpg?im_w=720'
// let imageaddress3 = 'https://a0.muscache.com/im/pictures/cfe9eca5-0f1f-4bb9-bb50-0a4044a50e7c.jpg?im_w=720'
// let imageaddress4 = 'https://a0.muscache.com/im/pictures/11ddf357-03fd-4135-94f4-2335e9b54c7e.jpg?im_w=720'


// let data = {
//   "id": 1,
//   "title": "آپارتمان مدرن در کارته سخی",
//   "description": "آپارتمان نوساز و مدرن در منطقه امن کارته سخی، دارای طراحی داخلی شیک و امکانات کامل. مناسب برای خانواده‌های افغان.",
//   "type": "آپارتمان",
//   "transactionType": "فروش",
//   "location": {
//     "province": "کابل",
//     "city": "کابل",
//     "district": "کارته سخی",
//     "streetAddress": "جاده کارته سخی، کوچه تعمیر",
//     "landmark": "نزدیک مسجد کارته سخی"
//   },
//   "details": {
//     "bedrooms": 3,
//     "bathroom": 2,
//     "area": 140,
//     "floor": 3,
//     "totalFloor": 5,
//     "yearBuild": 1400,
//     "furnished": "نیمه مبله",
//     "parking": true,
//     "security": true
//   },
//   "amenities": [
//     "پارکینگ",
//     "آسانسور",
//     "سیستم امنیتی",
//     "بالکن",
//     "کولر گازی",
//     "سیستم گرمایشی",
//     "اینترنت"
//   ],
//   "price": {
//     "amount": 12500000,
//     "currency": "افغانی"
//   },
//   "media": [
//     imageaddress,
//     imageaddress1,
//     imageaddress2,
//     imageaddress3,
//     imageaddress4
//   ]
// }

// const HouseInfo = () => {
//   return (
//     <div dir="rtl" className="max-w-6xl mx-auto p-4 bg-white">
//       {/* Title Section */}
//       <div className="mb-6 border-b pb-4">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.title}</h1>
//         <div className="flex items-center gap-4 text-gray-600">
//           <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//             {data.type}
//           </span>
//           <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//             {data.transactionType}
//           </span>
//           <span className="text-lg font-semibold text-red-600">
//             {data.price.amount.toLocaleString()} {data.price.currency}
//           </span>
//         </div>
//       </div>

//       {/* Location */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-3 text-gray-800">موقعیت</h2>
//         <div className="flex flex-wrap gap-2 text-gray-700">
//             <span>📍 {data.location.province}، {data.location.city}</span>
//             <span>• {data.location.district}</span>
//           <span>• {data.location.streetAddress}</span>
//           {data.location.landmark && (
//             <span className="text-sm text-gray-500">({data.location.landmark})</span>
//           )}
//         </div>
//       </div>

//       {/* Description */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-3 text-gray-800">توضیحات</h2>
//         <p className="text-gray-700 leading-relaxed">{data.description}</p>
//       </div>

//       {/* Property Details */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-3 text-gray-800">مشخصات ملک</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="text-gray-500 text-sm">اتاق خواب</div>
//             <div className="font-semibold">{data.details.bedrooms} خوابه</div>
//           </div>
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="text-gray-500 text-sm">حمام</div>
//             <div className="font-semibold">{data.details.bathroom} حمام</div>
//           </div>
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="text-gray-500 text-sm">متراژ</div>
//             <div className="font-semibold">{data.details.area} متر</div>
//           </div>
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="text-gray-500 text-sm">طبقه</div>
//             <div className="font-semibold">{data.details.floor} از {data.details.totalFloor}</div>
//           </div>
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="text-gray-500 text-sm">سال ساخت</div>
//             <div className="font-semibold">{data.details.yearBuild}</div>
//           </div>
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="text-gray-500 text-sm">مبله</div>
//             <div className="font-semibold">{data.details.furnished}</div>
//           </div>
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="text-gray-500 text-sm">پارکینگ</div>
//             <div className="font-semibold">{data.details.parking ? 'دارد' : 'ندارد'}</div>
//           </div>
//           <div className="bg-gray-50 p-3 rounded-lg">
//             <div className="text-gray-500 text-sm">امنیت</div>
//             <div className="font-semibold">{data.details.security ? 'دارد' : 'ندارد'}</div>
//           </div>
//         </div>
//       </div>

//       {/* Amenities */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-3 text-gray-800">امکانات</h2>
//         <div className="flex flex-wrap gap-2">
//           {data.amenities.map((amenity, index) => (
//             <span 
//               key={index}
//               className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
//             >
//               {amenity}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Contact Info */}
//       <div className="bg-gray-50 p-6 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">تماس با مالک</h2>
//         <div className="flex gap-4">
//           <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
//             تماس تلفنی
//           </button>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//             ارسال پیام
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default HouseInfo; 

// const About = () => {
//   return (
//     <div>
//       <HouseInfo />
//     </div>
//   )
// }

// export default About

import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About