
// custom hook
import { useScroll } from "../../hooks/useScroll";

// components
import RentPricesHomeSituationNumberOfRoomsSelectBox from "./NavbarSearchSelectBoxes/RentPricesHomeSituationNumberOfRoomsSelectBox";
import SelectBoxAndSearchButton from "./NavbarSearchSelectBoxes/SelectBoxAndSearchButton";

const Navbar = () => {

    const isScrolled = useScroll(50);

  return (
    <div dir="rtl" className={`fixed top-0 left-1/2 -translate-x-1/2 w-full md:w-[70%] text-white z-50 transition-all duration-300 shadow-xl bg-gray-900 ${isScrolled ? 'py-3' : 'py-6'}`}>
        {/* navbar top section */}
        <SelectBoxAndSearchButton />
        {/* end of navbar top section */}

        {/* search bar select box models */}
        {!isScrolled && <RentPricesHomeSituationNumberOfRoomsSelectBox />}
        {/* search bar select box models */}

    </div>
  )
}

export default Navbar