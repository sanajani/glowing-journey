import { getHouseTypeColor } from "../../utils/Afg_Province_Config";

const SpanInsideHomePage = ({houseType}) => {
  return (
    <span
      className={`px-6 py-1 text-2xl inline-block text-center text-white font-bold absolute top-3 left-3 rounded-full ${getHouseTypeColor(
        houseType
      )}`}
    >
      {houseType}
    </span>
  );
};

export default SpanInsideHomePage;
