import { homePrices, homeSituation, numberOfRooms } from "../../../utils/Afg_Province_Config";
import SelectBox from "../../ui/selectbox/SelectBox";

const RentPricesHomeSituationNumberOfRoomsSelectBox = () => {
  return (
        <div className="flex justify-around mt-3">
            <div>
                <SelectBox 
                    firstOptionValueShowed={'چی نوع'}
                    listOfSelectBoxValues={homeSituation}
                />
            </div>
            <div>
                <SelectBox 
                    firstOptionValueShowed={'قیمت خانه '}
                    listOfSelectBoxValues={homePrices}
                />
            </div>
            <div>
                <SelectBox 
                    firstOptionValueShowed={'چند اطاقه'}
                    listOfSelectBoxValues={numberOfRooms}
                />
            </div>
        </div>
  )
}

export default RentPricesHomeSituationNumberOfRoomsSelectBox