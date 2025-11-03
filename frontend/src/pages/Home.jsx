
// components used inse home page
import SpanInsideHomePage from "../components/homePageComponent/SpanInsideHomePage"
import TitleDescComp from "../components/homePageComponent/TitleDescComp"
import ImageContainer from "../components/image/ImageContainer"

// utility classes 
import {housesData} from "../utils/Afg_Province_Config"

const Home = () => {
    
  return (
    <div dir="rtl" className="p-4 shadow w-full mt-3 sm:w-4/5 mx-auto lg:w-full">
        <h1 className="md:text-2xl text-xl font-bold text-gray-800">تمام خانه های موجود: همه</h1>
        <div className="grid mt-9 grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                housesData.map(({imageUrl, id, description, houseType, title}) => {
                   return <div key={id} className="rounded-lg shadow-md border-2 hover:shadow-lg  border-gray-200 p-2 relative">
                        <ImageContainer imageUrl={imageUrl}/>
                        <TitleDescComp title={title} description={description} />
                        <SpanInsideHomePage houseType={houseType} />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Home