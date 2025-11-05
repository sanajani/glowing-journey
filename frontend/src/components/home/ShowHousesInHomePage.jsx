import { housesData } from "../../utils/Afg_Province_Config"

import Card from "../ui/card/Card"
import ImageContainer from '../ui/image/ImageContainer'
import TitleDescComp from "./TitleDescComp"
import SpanInsideHomePage from "./SpanInsideHomePage"

import { Link } from "react-router-dom"

const ShowHousesInHomePage = () => {
  return (
       <div className="grid mt-9 grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                housesData.length > 1 ?
                housesData.map(({imageUrl, id, description, houseType, title}) => {
                   return <Card key={id}>
                        <ImageContainer className={'h-56'} imageUrl={imageUrl} title={title} />
                        <TitleDescComp title={title} description={description} />
                        <SpanInsideHomePage houseType={houseType} />
                        <Link to='/singlepage' className="bg-blue-700 text-white py-2 mt-4 block text-center rounded-lg px-8">دیدن بیشتر...</Link>
                    </Card>
                })  : 'خانه ایی موجود نیست'
            }
        </div>
  )
}

export default ShowHousesInHomePage