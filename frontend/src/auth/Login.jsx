
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

import { Link } from 'react-router-dom'

import Button from "../components/ui/Button"
const Login = () => {
  return (
    <div dir="rtl">
        <div className="max-w-6xl mx-auto md:pt-48 pt-16 bg-gray-200 min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold md:my-10 mb-6">درست کردن اکانت</h1>
            <form className="md:w-4/5 gap-5 mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6 md:grid grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-right mr-2">نام</label>
                <input 
                type="text"
                id="name"
                placeholder="نام خود را وارد کنید"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent transition-all duration-200 text-lg"
                />
              </div>
              <div className=" space-y-2">
                <label className="block font-medium mr-2 text-sm text-gray-700 text-right " htmlFor="email">تخلص </label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent text-lg transition-all duration-200" placeholder="تخلص خود را وارد کنید" />
              </div>

              <div className=" space-y-2">
                <label className="block font-medium mr-2 text-sm text-gray-700 text-right" htmlFor="email">ایمیل ادرس شما</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent text-lg transition-all duration-200" placeholder="ایمیل ادرس شما" />
              </div>

              <div className=" space-y-2">
                <label className="block font-medium mr-2 text-sm text-gray-700 text-right" htmlFor="email">رمز </label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent text-lg transition-all duration-200" placeholder="رمز را وارد کنید" />
              </div>

              <div className="space-y-2 flex flex-col md:flex-row gap-4 col-span-2">
                <Button text={'دفتر معاملات دارم'} containerStyle="bg-green-800 h-full text-white flex-1 py-3 rounded-lg"  />
                <Button text={'دنبال خانه استم'}  containerStyle="bg-blue-800 text-white flex-1 py-3 rounded-lg"  />
              </div>
                <div className='col-span-2 gap-8 mt-4 flex justify-between'>
                  <Link className='border-b flex-1 pb-2 text-lg' to='/auth/signup'>وارد شدن در اکانت</Link>
                  <Link className='flex-1 pb-2 text-lg border-b' to='/'>رفتن ب مینو اصلی</Link>
                </div>

            </form>
          </div>
        </div>
    </div>
  )
}
export default Login
 