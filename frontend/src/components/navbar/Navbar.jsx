// react icons for navbar page
import { IoIosArrowDown } from "react-icons/io";

// custom hook
import { useScroll } from "../../hooks/useScroll";

// components
import RentPricesHomeSituationNumberOfRoomsSelectBox from "./NavbarSearchSelectBoxes/RentPricesHomeSituationNumberOfRoomsSelectBox";
import SelectBoxAndSearchButton from "./NavbarSearchSelectBoxes/SelectBoxAndSearchButton";

const Navbar = () => {
  const isScrolled = useScroll(100);

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
            <IoIosArrowDown size={34} className="animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
