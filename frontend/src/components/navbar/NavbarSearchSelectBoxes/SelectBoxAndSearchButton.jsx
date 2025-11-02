import { afghanistanProvinces } from "../../../utils/Afg_Province_Config";
import Button from "../../ui/Button";
import SelectBox from "../../ui/selectbox/SelectBox";

const SelectBoxAndSearchButton = () => {
  return (
    <div className="flex px-4 gap-4 mb-2">
      <Button
        text={"سرچ کنید"}
        containerStyle=" hover:bg-gray-800 transition-colors text-lg border px-2 rounded-lg"
      />
      <div className="flex-1">
        <SelectBox
          firstOptionValueShowed={"ولایت تان را انتخاب کنید"}
          listOfSelectBoxValues={afghanistanProvinces}
          containerStyle={"p-2 text-lg rounded-full"}
        />
      </div>
    </div>
  );
};

export default SelectBoxAndSearchButton;
