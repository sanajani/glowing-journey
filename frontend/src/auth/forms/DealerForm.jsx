import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";
import FormField from "../../components/form/InputLabel";

const DealerForm = ({ register, errors, onBack }) => {

  return (
    <div className="md:w-4/5 gap-2 mx-auto h-full bg-white rounded-xl shadow-lg p-6 space-y-1 md:grid grid-cols-2">
      {/* number 1 Field */}
      <FormField
        label="شماره"
        type="text"
        id="phoneNumber"
        placeholder="شماره خود را وارد کنید"
        register={register}
        error={errors?.phoneNumber?.message}
      />

      {/* number 2 Field */}
      <FormField
        label="شماره 2"
        type="text"
        id="phoneNumber2"
        placeholder="شماره2 خود را وارد کنید"
        register={register}
        error={errors?.phoneNumber2?.message}
      />

      {/* province Field */}
      <FormField
        label="ولایت "
        type="text"
        id="province"
        placeholder=" ولایت شما الزامی است"
        register={register}
        error={errors?.province?.message}
      />

      {/* city Field */}
      <FormField
        label="شهر"
        type="text"
        id="city"
        placeholder="شهر را وارد کنید"
        register={register}
        error={errors?.city?.message}
      />

            {/* district Field */}
      <FormField
        label="ناحیه"
        type="text"
        id="district"
        placeholder="شهر را وارد کنید"
        register={register}
        error={errors?.district?.message}
      />

                  {/* streetAddress Field */}
      <FormField
        label="ادرس دقیق"
        type="text"
        id="streetAddress"
        placeholder="ادرس جاده را وارد کنید"
        register={register}
        error={errors?.streetAddress?.message}
      />

      {/* Rest of your existing code remains the same */}
      <div className="flex gap-2 flex-col md:flex-row col-span-2 my-4 md:mt-0">
        <Button
          type="submit"
          text={"درست شدن اکانت"}
          containerStyle="bg-blue-800 h-full text-white cursor-pointer flex-1 py-3 rounded-lg"
        />
        <Button
        onClick={onBack}
          type="button"
          text={"برگشت"}
          containerStyle="bg-green-900 h-full text-white cursor-pointer flex-1 py-3 rounded-lg"
        />
      </div>
      
      <div className="col-span-2 flex justify-between gap-4">
        <Link
          className="flex-1 border-b text-sm md:text-lg py-2 font-bold rounded-lg bg-green-900 text-white"
          to="/auth/signup"
        >
          از قبل اکانت دارم
        </Link>
        <Link
          className="flex-1 text-sm md:text-lg border-b text-white bg-blue-900 font-bold py-2 rounded-lg"
          to="/"
        >
          رفتن ب مینو اصلی
        </Link>
      </div>
    </div>
  );
};

export default DealerForm;