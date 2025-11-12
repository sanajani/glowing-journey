// import { houseCondititionInfo, houseType } from "../../utils/houseFormData"
import { afghanistanProvinces } from "../../utils/Afg_Province_Config"
import SelectBox from "../ui/selectbox/SelectBox"
import HouseFormInput from "./shared/HouseFormInput"
import HouseFormLabel from "./shared/HouseFormLabel"



const Location_2 = () => {
  return (
           <section>
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">موقعیت</h2>
          <div className="grid md:grid-cols-2 gap-6">
              <div>
                <HouseFormLabel htmlFor="province" text="ولایت" />
                <SelectBox listOfSelectBoxValues={afghanistanProvinces} firstOptionValueShowed={'کدام ولایت'} />
            </div>
            <div>
                <HouseFormLabel htmlFor="city" text="شهر" />
                <HouseFormInput 
                  id="city"
                  type="text"
                  placeholder="کدام شهر"
                  />
            </div>
            <div>
              <HouseFormLabel htmlFor="district" text="ناحیه" />
              <HouseFormInput 
                  id="district"
                  type="text"
                  placeholder="کدام ناحیه"
                  />
            </div>
            <div>
              <HouseFormLabel htmlFor="streetAddress" text="ادرس کوچه" />
              <HouseFormInput 
                  id="streetAddress"
                  type="text"
                  placeholder="ادرس کوچه"
                  />
            </div>
            <div>
              <HouseFormLabel htmlFor="landmark" text="نشانی تا خانه" />
              <HouseFormInput 
                  id="landmark"
                  type="text"
                  placeholder=" نزدیک به (مثلاً مسجد یا مکتب)"
                  />
            </div>
          </div>
        </section>
  )
}

export default Location_2