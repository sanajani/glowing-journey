import SelectBox from "../ui/selectbox/SelectBox"
import HouseFormInput from "./shared/HouseFormInput"
import HouseFormLabel from "./shared/HouseFormLabel"
import { houseCurrency } from "../../utils/houseFormData"

const Prices_5 = () => {
  return (
     <section>
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">قیمت</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <HouseFormLabel htmlFor='amount' text='مقدار' />
              <HouseFormInput 
                id="amount"
                type="text"
                placeholder='20000'
              />
            </div>

            <div>
              <HouseFormLabel htmlFor='currency' text='ارز' />
              <SelectBox 
                id="currency"
                listOfSelectBoxValues={houseCurrency}
                firstOptionValueShowed={"واحد پولی"}
              />
            </div>

            <div>
              <HouseFormLabel
                text='مدت (مثلاً ماهانه یا سالانه)'
                htmlFor='period'
              />
              <HouseFormInput
                id="period"
                type="text"
                placeholder={'مدت زمان کرایه یا گیراویی'}
              />
            </div>

            <div className="col-span-full">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  id="negotiable"
                />
                قابل مذاکره
              </label>
            </div>
          </div>
        </section>
  )
}

export default Prices_5