
import ImageGridDesktop from "../components/desktop/ImageGridDesktop"
import HouseInfo from "../components/mobile/HouseInfo"
import ImageGridMobile from "../components/mobile/ImageGridMobile"


const SingleHome = () => {
  return (
    <div dir="rtl">
      <div className="">
        <h1 className="mt-48 mb-4 mx-2 text-xl font-semibold">خانه آپرتمانی سه طبقه</h1>
        {/* desktop version gallary */}
        <div className="hidden md:block">
          <ImageGridDesktop/>
        </div>
        {/* end desktop version gallary */}

        {/* mobile version gallary */}
        <div className="md:hidden shadow-lg rounded-2xl overflow-hidden mb-5">
          <ImageGridMobile />
        </div>
        {/* end mobile version gallary */}

        <div className=""> 
          <HouseInfo />
        </div>
      </div>      
    </div>
  )
}

export default SingleHome