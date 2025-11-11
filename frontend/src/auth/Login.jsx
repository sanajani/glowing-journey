
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const baseSchema = yup.object({
  name: yup
  .string()
  .required("نام الزامی است")
  .min(3, 'نام باید حداقل 3 حرف باشد'),
    
  lastName: yup
  .string()
  .required('تخلص الزامی است')
  .min(3, 'تخلص باید حداقل 3 حرف باشد'),

  email: yup
  .string()
  .email("فرمت ایمیل نامعتبر است"),

   password: yup
    .string()
    .required('رمز الزامی است')
    .min(6, 'رمز باید حداقل 6 کاراکتر باشد')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'رمز باید شامل حروف بزرگ، کوچک و اعداد باشد'
    ),
})

const dealerSchema = baseSchema.concat(yup.object({
  phoneNumber1: yup.string().required('شماره تماس الزامی است'),
  phoneNumber2: yup.string(),
  province: yup.string().required(' شهر الزامی است'),
  district: yup.string().required('ناحیه الزامی است'),
  city: yup.string().required('ولایت الزامی است'),
  streetAddress: yup.string().required('آدرس الزامی است'),
}))

import { useState } from 'react'
import UserForm from './forms/UserForm'
import DealerForm from './forms/DealerForm'
const Login = () => {

  // state variables
  const [showDealerForm, setShowDealerForm] = useState(false);
  const [userType, setUserType] = useState('buyer');

  const { register, handleSubmit, formState:{errors, isValid} } = useForm({resolver: yupResolver(userType === 'dealer' ? dealerSchema : baseSchema), mode: 'onTouched', context: {isDealer: userType === 'dealer',}, defaultValues:{
    name:"Sanaullah",
    lastName:"Hadid",
    email:"webdevfarsi@gmail.com"
  }});
  const onBack = () => {
    setShowDealerForm(false);
    setUserType('buyer')
  }
   const formSubmit = (data) => {
    // Here you can send data to your API
    if (userType === 'dealer') {
      // Send dealer data
      console.log('Dealer registration:', data);
    } else {
      // Send regular user data
      console.log('User registration:', data);
    }
  }

  return (
    <div dir="rtl">
        <div className="max-w-6xl mx-auto bg-gray-200 min-h-screen flex items-center justify-center">
          <div className="text-center w-full h-full md:pt-2">
            <h1 className="text-2xl font-bold mb-6">درست کردن {showDealerForm ? 'حساب کاری' : 'حساب کاربری'}</h1>
               <form className={`relative overflow-hidden min-h-[720px] ${showDealerForm ? 'md:min-h-[500px]': 'md:min-h-[400px]'}`} onSubmit={handleSubmit(formSubmit)} >
              <div className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${showDealerForm ? '-translate-x-full opacity-0':'translate-x-0 opacity-100'}`}> 
                <UserForm isValid={isValid} register={register} errors={errors} setShowDealerForm={setShowDealerForm} setUserType={setUserType} />
              </div>
              <div className={` absolute inset-0 w-full min-h-full duration-500 transition-all ${showDealerForm ? 'translate-x-0 opacity-100': 'translate-x-full opacity-0'}`}>
                <DealerForm onBack={onBack} formSubmit={formSubmit} register={register} errors={errors} />
              </div>
            </form> 
          </div>
        </div>
    </div>
  )
}
export default Login
