// import { Link } from "react-router-dom";
// import Button from "../../components/ui/Button";
// import { useEffect, useState } from "react";
// import ErrorText from "../../components/ErrorText";

// const UserForm = ({register, errors, setShowDealerForm,isValid}) => {
//   const [showMessage, setShowMessage] = useState(false);

//   const showDealerFormHandler = () => {
//     console.log(showMessage);
    
//     if(!isValid){
//       setShowMessage(true)
//     } 
//       else{
//         setShowDealerForm(true);
//         setShowMessage(false)
//     }
//   }

// // add effect:
// useEffect(() => {
//   let timer;
//   if (showMessage) {
//     timer = setTimeout(() => setShowMessage(false), 5000);
//   }
//   return () => clearTimeout(timer);
// }, [showMessage]);


//   return (
//     <div className="md:w-4/5 gap-5 mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6 md:grid grid-cols-2">
//       <div className="space-y-2">
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-700 text-right mr-2"
//         >
//           نام
//         </label>
//         <input
//           type="text"
//           id="name"
//           placeholder="نام خود را وارد کنید"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent transition-all duration-200 text-lg"
//           {...register("name")}
//         />
//         {errors?.name?.message && (
//           <ErrorText>{errors?.name?.message}</ErrorText>
//         )}
//       </div>
//       <div className=" space-y-2">
//         <label
//           className="block font-medium mr-2 text-sm text-gray-700 text-right "
//           htmlFor="lastName"
//         >
//           تخلص
//         </label>
//         <input
//           type="text"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent text-lg transition-all duration-200"
//           placeholder="تخلص خود را وارد کنید"
//           {...register("lastName")}
//         />
//         {errors?.lastName?.message && (
//             <ErrorText>{errors?.lastName?.message}</ErrorText>
//         )}
//       </div>

//       <div className=" space-y-2">
//         <label
//           className="block font-medium mr-2 text-sm text-gray-700 text-right"
//           htmlFor="email"
//         >
//           ایمیل ادرس شما
//         </label>
//         <input
//           type="text"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent text-lg transition-all duration-200"
//           placeholder="ایمیل ادرس شما الزامی نیست"
//           {...register("email")}
//         />
//         {errors?.email?.message && (
//           <ErrorText>{errors?.email?.message}</ErrorText>
//         )}
//       </div>

//       <div className=" space-y-2">
//         <label
//           className="block font-medium mr-2 text-sm text-gray-700 text-right"
//           htmlFor="password"
//         >
//           رمز
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:border-transparent text-lg transition-all duration-200"
//           placeholder="رمز را وارد کنید"
//           {...register("password")}
//         />
//         {errors?.password?.message && (
//             <ErrorText>{errors?.password?.message}</ErrorText>
//         )}
//       </div>

//       <div className="space-y-2 flex flex-col md:flex-row gap-4 col-span-2">
//         <Button
//           type="submit"
//           text={"دنبال خانه استم"}
//           containerStyle="bg-blue-800 h-full text-white cursor-pointer flex-1 py-3 rounded-lg"
//         />
//         <div className="flex-1 relative">
//         <Button
//           type="button"
//           onClick={showDealerFormHandler}
//           text={"دفتر معاملات دارم"}
//           containerStyle={`${isValid ? 'cursor-pointer':'cursor-not-allowed'} w-full bg-green-800 h-full text-white py-3 rounded-lg`}
//         />
//         {
//          showMessage && <p className="absolute -bottom-7 text-sm text-red-600 right-0">⚠️ لطفا تمام فیلدهای ضروری را پر کنید</p>
//         }
//         </div>

//       </div>
//       <div className="col-span-2 gap-8 mt-4 flex justify-between">
//         <Link
//           className="border-b flex-1 pb-2 text-lg text-green-700 font-bold "
//           to="/auth/login"
//         >
//           از قبل اکانت دارم
//         </Link>
//         <Link
//           className="flex-1 pb-2 text-lg border-b text-blue-700 font-bold"
//           to="/"
//         >
//           رفتن ب مینو اصلی
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default UserForm;
