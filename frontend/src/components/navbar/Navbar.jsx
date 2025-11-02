
// custom hook
import { useScroll } from "../../hooks/useScroll";

// config values
import { afghanistanProvinces, homePrices, homeSituation, numberOfRooms } from "../../utils/Afg_Province_Config";

// components
import Button from "../Button";
import SelectBox from "../selectBoxProvinceNames/SelectBox";
import RentPricesHomeSituationNumberOfRoomsSelectBox from "./RentPricesHomeSituationNumberOfRoomsSelectBox";

const Navbar = () => {

    const isScrolled = useScroll(50);

  return (
    <div dir="rtl" className={`fixed top-0 left-1/2 -translate-x-1/2 w-full md:w-[70%] text-white z-50 transition-all duration-300 shadow-xl bg-gray-900 py-6`}>
        {/* navbar top section */}
        <div className="flex px-4 gap-4 mb-2">
            <Button
                text={'سرچ کنید'}
                containerStyle='text-lg border px-2 rounded-lg'
            />
            <div className="flex-1">
                <SelectBox 
                    firstOptionValueShowed={'ولایت تان را انتخاب کنید'}
                    listOfSelectBoxValues={afghanistanProvinces}
                    containerStyle={'p-2 text-lg rounded-full'}
                />
            </div>
        </div>
        {/* end of navbar top section */}

        {/* search bar select box models */}
        {!isScrolled && <RentPricesHomeSituationNumberOfRoomsSelectBox />}
        {/* search bar select box models */}

    </div>
  )
}

export default Navbar