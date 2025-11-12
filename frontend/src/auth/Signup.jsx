
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// import FormField from '../components/form/FormField'
import FormField from './forms/FormField'
import Button from '../components/ui/Button'
import LinksInsideForm from './forms/LinksInsideForm'
const baseSchema = yup.object({
  name: yup
  .string()
  .required("نام الزامی است")
  .min(3, 'نام باید حداقل 3 حرف باشد'),
    
   password: yup
    .string()
    .required('رمز الزامی است')
    .min(6, 'رمز باید حداقل 6 کاراکتر باشد')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'رمز باید شامل حروف بزرگ، کوچک و اعداد باشد'
    ),
})


const Signup = ({}) => {
  
  // state variables

  const form = useForm({resolver: yupResolver(baseSchema)});
  const {register, handleSubmit, formState} = form;
  const { errors } = formState
   const formSubmit = (data) => {
     console.log('Dealer registration:', data);
  }

  return (
    <div dir="rtl">
        <div className="max-w-3xl mx-auto bg-gray-200 min-h-screen flex items-center justify-center">
          <div className="text-center w-full h-full md:pt-2">
            <h1 className="text-2xl font-bold mb-6">وارد حساب تان شوید</h1>
              <form className={`max-w-[600px] mx-auto bg-white p-4 space-y-4 overflow-hidden`} onSubmit={handleSubmit(formSubmit)} >
                 <FormField
                  label="نام"
                  type="text"
                  id="name"
                  placeholder="نام خود را وارد کنید"
                  register={register}
                  error={errors?.name?.message}
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
                <div className='flex flex-col'>
                  <Button
                    type="submit"
                    text={"دنبال خانه استم"}
                    containerStyle="bg-blue-800 h-full my-4 text-white cursor-pointer flex-1 py-3 rounded-lg"
                  />
                    <Button
                      type="button"
                      text={"دفتر معاملات دارم"}
                      containerStyle={` cursor-pointer bg-green-800 h-full text-white py-3 rounded-lg`}
                    />
                </div>
                <div>
                  <LinksInsideForm link1='/' link2='/auth/login' textLink1='مینو اصلی' textLink2='حساب جدید' />
                </div>
              </form>
          </div>
        </div>
    </div>
  )
}
export default Signup
