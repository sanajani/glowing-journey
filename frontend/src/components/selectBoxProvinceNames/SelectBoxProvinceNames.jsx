import { afghanistanProvinces } from "../../utils/Afg_Province_Config"


const SelectBoxProvinceNames = () => {
  return (
    <select className=
    "">
        <option value="">ولایت تان را انتخاب کنید</option>
        {
            afghanistanProvinces.map(({id, label, value}) => {
               return <option key={id} value={value}>{label}</option>
            })
        }
    </select>
  )
}

export default SelectBoxProvinceNames