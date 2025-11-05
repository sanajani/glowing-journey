// import { image1 } from "../assets/images"

import ImagesComponentDesktop from "../components/desktop/ImagesComponentDesktop"
import ImageCaruselComponentMobile from "../components/mobile/ImageCaruselComponentMobile"


const SingleHome = () => {
  return (
    <div dir="rtl">
      <div className="">
        <h1 className="my-6 mx-2 text-xl font-semibold">خانه آپرتمانی سه طبقه</h1>
        <div className="hidden md:block">
          <ImagesComponentDesktop/>
        </div>
        <div className="md:hidden">
          <ImageCaruselComponentMobile />
        </div>
      </div>      
    </div>
  )
}

export default SingleHome