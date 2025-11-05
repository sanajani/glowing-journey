
import ImageGridDesktop from "../components/desktop/ImageGridDesktop"
import ImageGridMobile from "../components/mobile/ImageGridMobile"


const SingleHome = () => {
  return (
    <div dir="rtl">
      <div className="">
        <h1 className="my-6 mx-2 text-xl font-semibold">خانه آپرتمانی سه طبقه</h1>
        <div className="hidden md:block">
          <ImageGridDesktop/>
        </div>
        <div className="md:hidden">
          <ImageGridMobile />
        </div>
      </div>      
    </div>
  )
}

export default SingleHome