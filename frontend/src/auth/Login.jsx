
// let data = [
//   {
//     phoneNumber1,
//     phoneNumber2,
//     details:{  
//       avatar,
//       nationalIdCard,
//     },
//     contactInfo:{
//     province,
//     district,
//     city,
//     streetAddress
//   }
// }
// ]

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const loginSchema = yup.object({
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


import { useState } from 'react'
import UserForm from './forms/UserForm'
import DealerForm from './forms/DealerForm'
const Login = () => {

  // state variables
  const [showDealerForm, setShowDealerForm] = useState(false);

  const { register, handleSubmit, formState:{errors, isValid} } = useForm({resolver: yupResolver(loginSchema), mode: 'onTouched'});

  const formSubmit = (values) => {
    console.log(values);
  }

  return (
    <div dir="rtl">
        <div className="max-w-6xl mx-auto bg-gray-200 min-h-screen flex items-center justify-center">
          <div className="text-center w-full h-full md:pt-52">
            <h1 className="text-2xl font-bold mb-6">درست کردن {showDealerForm ? 'حساب کاری' : 'حساب کاربری'}</h1>
               <form className='relative overflow-hidden min-h-[700px]' onSubmit={handleSubmit(formSubmit)} >
              <div className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${showDealerForm ? '-translate-x-full opacity-0':'translate-x-0 opacity-100'}`}> 
                <UserForm isValid={isValid} register={register} errors={errors} setShowDealerForm={setShowDealerForm}/>
              </div>
              <div className={` absolute inset-0 w-full h-full duration-500 transition-all ${showDealerForm ? 'translate-x-0 opacity-100': 'translate-x-full opacity-0'}`}>
                <DealerForm />
              </div>
            </form> 
          </div>
        </div>
    </div>
  )
}
export default Login
