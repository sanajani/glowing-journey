import { useEffect, useState } from "react";
import LinksInsideForm from "./LinksInsideForm";
import Buttons from "./Buttons";
import FormField from "./FormField";


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

      <Buttons  showDealerFormHandler={showDealerFormHandler} isValid={isValid} showMessage={showMessage} />

      <LinksInsideForm link1='/' link2='/auth/login' textLink1='مینو اصلی' textLink2=' از قبل اکانت دارم' />

    </div>
  );
};

export default UserForm;
