import { houseCondititionInfo, houseType } from "../../utils/houseFormData"
import SelectBox from "../ui/selectbox/SelectBox"
import HouseFormInput from "./shared/HouseFormInput"
import HouseFormLabel from "./shared/HouseFormLabel"

const BasicInfo_1 = () => {
  return (
    <>
    {/* --- Basic Info  component--- */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">
            معلومات اصلی
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
                <HouseFormLabel htmlFor="title" text="عنوان" />
                <HouseFormInput 
                  id="title"
                //   onChange={handleChange}
                  type="text"
                  placeholder="مثلاً آپارتمان سه طبقه"
                  />
            </div>

            <div>
              <HouseFormLabel htmlFor='houseType' text='نوع ملک' />
              <SelectBox
              listOfSelectBoxValues={houseType} firstOptionValueShowed='نوع ملک را انتخاب کنید'/>
            </div>

           <div>
              <HouseFormLabel htmlFor='houseConditions' text='نوع معامله' />
              <SelectBox 
              id='houseConditions' listOfSelectBoxValues={houseCondititionInfo} firstOptionValueShowed="نوع معامله را انتخاب کیند"
              />
            </div>

            <div className="md:col-span-2">
              <HouseFormLabel htmlFor='description' text='توضیحات' />
              <textarea
                id="description"
                // value={formData.description}
                // onChange={handleChange}
                className="border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="در مورد ملک توضیح بدهید..."
              />
            </div>
          </div>
        </section>
    </>
  )
}

export default BasicInfo_1