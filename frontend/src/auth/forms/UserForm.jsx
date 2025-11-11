import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useEffect, useState } from "react";
// import FormField from "../../components/form/FormField";
import FormField from "../../components/form/InputLabel";

const UserForm = ({ register, errors, setShowDealerForm, isValid, setUserType }) => {
  const [showMessage, setShowMessage] = useState(false);

  const showDealerFormHandler = () => {
    if (!isValid) {
      setShowMessage(true);
    } else {
      setShowDealerForm(true);
      setShowMessage(false);
      setUserType('dealer');
    }
  };

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => setShowMessage(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [showMessage]);

  return (
    <div className="md:w-4/5 gap-5 mx-auto bg-white rounded-xl shadow-lg p-6 md:grid grid-cols-2">
      {/* Name Field */}
      <FormField
        label="نام"
        type="text"
        id="name"
        placeholder="نام خود را وارد کنید"
        register={register}
        error={errors?.name?.message}
      />

      {/* Last Name Field */}
      <FormField
        label="تخلص"
        type="text"
        id="lastName"
        placeholder="تخلص خود را وارد کنید"
        register={register}
        error={errors?.lastName?.message}
      />

      {/* Email Field */}
      <FormField
        label="ایمیل ادرس شما"
        type="text"
        id="email"
        placeholder="ایمیل ادرس شما الزامی نیست"
        register={register}
        error={errors?.email?.message}
      />

      {/* Password Field */}
      <FormField
        label="رمز"
        type="password"
        id="password"
        placeholder="رمز را وارد کنید"
        register={register}
        error={errors?.password?.message}
      />

      {/* Rest of your existing code remains the same */}
      <div className="space-y-2 flex flex-col md:flex-row gap-4 col-span-2">
        <Button
          type="submit"
          text={"دنبال خانه استم"}
          containerStyle="bg-blue-800 h-full text-white cursor-pointer flex-1 py-3 rounded-lg"
        />
        <div className="flex-1 relative">
          <Button
            type="button"
            onClick={showDealerFormHandler}
            text={"دفتر معاملات دارم"}
            containerStyle={`${isValid ? 'cursor-pointer' : 'cursor-not-allowed'} w-full bg-green-800 h-full text-white py-3 rounded-lg`}
          />
          {showMessage && (
            <p className="absolute -bottom-7 text-sm text-red-600 right-0">
              ⚠️ لطفا تمام فیلدهای ضروری را پر کنید
            </p>
          )}
        </div>
      </div>
      
      <div className="col-span-2 gap-8 md:gap-3 mt-4 flex justify-between">
        <Link
          className="border-b flex-1 pb-2 text-lg text-green-700 font-bold"
          to="/auth/signup"
        >
          از قبل اکانت دارم
        </Link>
        <Link
          className="flex-1 pb-2 text-lg border-b text-blue-700 font-bold"
          to="/"
        >
          رفتن ب مینو اصلی
        </Link>
      </div>
    </div>
  );
};

export default UserForm;