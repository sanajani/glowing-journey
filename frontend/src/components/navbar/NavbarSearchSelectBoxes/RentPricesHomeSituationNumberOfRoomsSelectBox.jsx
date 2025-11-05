import { homePrices, homeSituation, numberOfRooms } from "../../../utils/Afg_Province_Config";
import SelectBox from "../../ui/selectbox/SelectBox";

const RentPricesHomeSituationNumberOfRoomsSelectBox = () => {
  return (
        <div className="flex w-[97%] gap-2 mx-auto justify-around mt-3">
            <div className="w-full">
                <SelectBox 
                    firstOptionValueShowed={'چی نوع'}
                    listOfSelectBoxValues={homeSituation}
                />
            </div>
            <div className="w-full">
                <SelectBox 
                    firstOptionValueShowed={'قیمت خانه '}
                    listOfSelectBoxValues={homePrices}
                />
            </div>
            <div className="w-full">
                <SelectBox 
                    firstOptionValueShowed={'چند اطاقه'}
                    listOfSelectBoxValues={numberOfRooms}
                />
            </div>
        </div>
  )
}

export default RentPricesHomeSituationNumberOfRoomsSelectBox