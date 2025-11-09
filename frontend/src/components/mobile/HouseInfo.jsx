import Amenities from "./houseComponents/Amenities";
import ContactWithSeller from "./houseComponents/ContactWithSeller";
import HouseSpecifications from "./houseComponents/HouseSpecifications";
import { InfoTag } from "./houseComponents/InfoTag";
import Location from "./houseComponents/Location";

let imageaddress =
  "https://a0.muscache.com/im/pictures/dc9f2e94-efda-4bd2-a0f4-2bde6152b9a9.jpg?im_w=1200";
let imageaddress1 =
  "https://a0.muscache.com/im/pictures/7f2f5963-3324-4996-8259-4fd06599992f.jpg?im_w=720";
let imageaddress2 =
  "https://a0.muscache.com/im/pictures/d3d082a1-2f0e-4772-8aa4-62468f245ceb.jpg?im_w=720";
let imageaddress3 =
  "https://a0.muscache.com/im/pictures/cfe9eca5-0f1f-4bb9-bb50-0a4044a50e7c.jpg?im_w=720";
let imageaddress4 =
  "https://a0.muscache.com/im/pictures/11ddf357-03fd-4135-94f4-2335e9b54c7e.jpg?im_w=720";

let data = {
  id: 1,
  title: "آپارتمان مدرن در کارته سخی",
  description:
    "آپارتمان نوساز و مدرن در منطقه امن کارته سخی، دارای طراحی داخلی شیک و امکانات کامل. مناسب برای خانواده‌های افغان.",
  type: "آپارتمان",
  transactionType: "فروش",
  location: {
    province: "کابل",
    city: "کابل",
    district: "کارته سخی",
    streetAddress: "جاده کارته سخی، کوچه تعمیر",
    landmark: "نزدیک مسجد کارته سخی",
  },
  details: {
    bedrooms: 3,
    bathroom: 2,
    area: 140,
    floor: 3,
    totalFloor: 5,
    yearBuild: 1400,
    furnished: "نیمه مبله",
    parking: true,
    security: true,
  },
  amenities: [
    "پارکینگ",
    "آسانسور",
    "سیستم امنیتی",
    "بالکن",
    "کولر گازی",
    "سیستم گرمایشی",
    "اینترنت",
  ],
  price: {
    amount: 12500000,
    currency: "افغانی",
  },
  media: [
    imageaddress,
    imageaddress1,
    imageaddress2,
    imageaddress3,
    imageaddress4,
  ],
};


const priceFormat = (amount) => {
  if(!amount) null;
  return amount.toLocaleString() + 'افغانی';
}

const HouseInfo = () => {
  return (
    <div dir="rtl">
      {/* title section */}
      <div className="mb-6 border-b pb-4">
        <h1 className="text-2xl md:text-3xl mr-2 font-bold mb-2 text-gray-800">
          {data.title}
        </h1>

        {/* house type info and rent */}
        <div className="flex gap-4 items-center mr-1">
          <InfoTag variant="primary">{data?.type}</InfoTag>
          <InfoTag variant="success">{data?.transactionType}</InfoTag>
          {data?.price?.amount && <InfoTag className="font-bold text-lg" variant="danger">{priceFormat(data.price.amount)}</InfoTag>}
        </div>
      </div>

      <div className="text-gray-700">
        <h1 className="mr-1 text-2xl md:text-3xl font-bold text-gray-800">
          موقعیت
        </h1>
        <Location data={data}/>
      </div>

      {/* description details */}
      <div className="mt-6 mr-1 text-gray-700">
        <h1 className="text-2xl font-bold md:text-3xl mb-2 text-gray-800">
          توضیحات
        </h1>
        <p>{data.description}</p>
      </div>

      <div className="mt-6 mr-1 mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          مشخصات ملک
        </h1>
        <HouseSpecifications details={data?.details} />
      </div>

      <div className="">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">امکانات</h1>
        <Amenities amenities={data?.amenities}/>
      </div>

      <ContactWithSeller />
    </div>
  );
};

export default HouseInfo;
