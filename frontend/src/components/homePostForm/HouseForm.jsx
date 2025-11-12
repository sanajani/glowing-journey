import { useState } from "react";

// data
import BasicInfo_1 from "./BasicInfo_1";
import Location_2 from "./Location_2";
import Details_3 from "./Details_3";
import Amenities_4 from "./Amenities_4";
import Prices_5 from "./Prices_5";
import Media from "./Media";

const HouseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    houseType: "",
    transactionType: "",
    province: "",
    city: "",
    district: "",
    streetAddress: "",
    landmark: "",
    bedrooms: "",
    bathrooms: "",
    area:0,
    floor:0,
    totalFloor:0,
    yearBuilt:0,
    furniture: "",
    parking: "",
    security: "",
    amenities: {
      parking: false,
      elevator: false,
      security: false,
      garden: false,
      pool: false,
      balcony: false,
      ac: false,
      heating: false,
      internet: false,
      cable_tv: false,
      pet_friendly: false,
      furnical: false,
    },
    amount: "",
    currency: "AFN",
    period: "",
    negotiable: false,
  });


  return (
    <div dir="rtl" className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        🏠 فورم ثبت ملک
      </h1>

      <form className="space-y-10">
        {/* --- Basic Info --- */}
        <BasicInfo_1 />

        {/* --- Location --- */}
        <Location_2 />

        {/* --- Details --- */}
        <Details_3 />

        {/* --- Amenities --- */}
        <Amenities_4 />

        {/* --- Price --- */}
        <Prices_5 />

        {/* --- Media --- */}
        <Media />

        {/* --- Submit --- */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md w-full transition"
        >
          ارسال اعلان
        </button>
      </form>
    </div>
  );
};

export default HouseForm;
