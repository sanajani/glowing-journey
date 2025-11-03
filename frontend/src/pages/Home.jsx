// import { image1 } from "../assets/images"
import ImageContainer from "../components/image/ImageContainer"
import {housesData, getHouseTypeColor} from "../utils/Afg_Province_Config"

const Home = () => {
    
  return (
    <div dir="rtl" className="p-4 shadow w-full mt-3 sm:w-4/5 mx-auto lg:w-full">
        <h1 className="md:text-2xl text-xl font-bold text-gray-800">تمام خانه های موجود: همه</h1>
        <div className="grid mt-9 grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                housesData.map(({imageUrl, id, description, houseType, title}) => {
                   return <div key={id} className="rounded-lg shadow-md border-2 hover:shadow-lg  border-gray-200 p-2 relative">
                        <ImageContainer imageUrl={imageUrl}/>
                        <div>
                            <h1 className="text-xl font-bold my-2 px-2 text-gray-800">{title}</h1>
                            <p className="p-2 text-gray-900 leading-relaxed text-[15px]">{description}</p>
                        </div>
                        <span className={`px-6 py-1 text-2xl inline-block text-center text-white font-bold absolute top-3 left-3 rounded-full ${getHouseTypeColor(houseType)}`}>{houseType}</span>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Home