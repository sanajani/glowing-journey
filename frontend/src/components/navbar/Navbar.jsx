// react icons for navbar page
import { IoIosArrowDown } from "react-icons/io";

// custom hook
import { useScroll } from "../../hooks/useScroll";

// components
import RentPricesHomeSituationNumberOfRoomsSelectBox from "./NavbarSearchSelectBoxes/RentPricesHomeSituationNumberOfRoomsSelectBox";
import SelectBoxAndSearchButton from "./NavbarSearchSelectBoxes/SelectBoxAndSearchButton";
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
  const isScrolled = useScroll(100);
  const isScrolledForArrow = useScroll(0);

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

          <div className=" flex justify-center mt-3">
            <IoIosArrowDown size={34} className="cursor-pointer animate-bounce" />
          </div>
        </div>
      )}
      <div onClick={scrollToTop} className={` cursor-pointer ${isScrolledForArrow ? 'fixed': 'hidden'} -bottom-[800px] md:-bottom-[720px] right-3 z-50 bg-white shadow-lg border-gray-300 border p-3 rounded-md`}><FaArrowUp /></div>
    </div>
  );
};

export default Navbar;
