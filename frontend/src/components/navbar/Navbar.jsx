// react icons for navbar page
import { IoIosArrowDown,IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

// custom hook
import { useScroll } from "../../hooks/useScroll";

// react states
import { useState } from "react";

// components
import RentPricesHomeSituationNumberOfRoomsSelectBox from "./NavbarSearchSelectBoxes/RentPricesHomeSituationNumberOfRoomsSelectBox";
import SelectBoxAndSearchButton from "./NavbarSearchSelectBoxes/SelectBoxAndSearchButton";

import { Link } from "react-router-dom";

const Navbar = () => {
  const isScrolled = useScroll(100);
  const isScrolledForArrow = useScroll(0);

  const [showTopBar,setShowTopBar] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div dir="rtl" className={`fixed top-0 left-1/2 -translate-x-1/2 w-full lg:w-[70%] z-50 transition-all duration-300 shadow-xl bg-white ${ isScrolled ? "py-4" : "pt-3"} flex flex-col justify-center z-50`}>
      {/* navbar top section */}
      <SelectBoxAndSearchButton />
      {/* end of navbar top section */}

      {!isScrolled && (
          <div>
            {/* search bar select box models */}
            <RentPricesHomeSituationNumberOfRoomsSelectBox />
            {/* search bar select box models */}

          <div className="flex justify-center mt-3">
            <IoIosArrowDown onClick={() => setShowTopBar(true)} size={34} className="cursor-pointer animate-bounce" />
          </div>
        </div>
      )}
      {/* arrow button */}
      <div onClick={scrollToTop} className={` cursor-pointer ${isScrolledForArrow ? 'fixed': 'hidden'} -bottom-[700px] md:-bottom-[720px] right-3 z-50 bg-white shadow-lg border-gray-300 border p-3 rounded-md`}><FaArrowUp /></div>

      {/* mobile navbars */}
      <div className={`transition-all duration-500 inset-shadow-2xs m-2 inner-2xl inset-1 shadow-4xl overflow-hidden ${showTopBar ? "h-[80vh]" : "h-0"}`}>
        <div className="">
          <IoMdClose className=" cursor-pointer bg-gray-300" onClick={() => setShowTopBar(false)} size={30} />
        </ div>
        <div className="w-full h-full flex flex-col text-center gap-5 justify-center">
          <div className="w-[450px] mx-auto flex flex-col gap-4">
            <Link to='/auth/login' className="text-xl cursor-pointer py-2 bg-blue-600 hover:bg-blue-800 transition-colors text-white border-2 border-gray-400">Login</Link>
            <Link to='/auth/signup' className="text-xl cursor-pointer py-2 bg-blue-700 hover:bg-blue-800 transition-colors text-white border-2 border-gray-400">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
