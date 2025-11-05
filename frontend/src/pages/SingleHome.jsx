
import ImageGridDesktop from "../components/desktop/ImageGridDesktop"
import ImageGridMobile from "../components/mobile/ImageGridMobile"


const SingleHome = () => {
  return (
    <div dir="rtl">
      <div className="">
        <h1 className="my-6 mx-2 text-xl font-semibold">خانه آپرتمانی سه طبقه</h1>
        {/* desktop version gallary */}
        <div className="hidden md:block">
          <ImageGridDesktop/>
        </div>
        {/* end desktop version gallary */}

        {/* mobile version gallary */}
        <div className="md:hidden">
          <ImageGridMobile />
        </div>
        {/* end mobile version gallary */}

      </div>      
    </div>
  )
}

export default SingleHome