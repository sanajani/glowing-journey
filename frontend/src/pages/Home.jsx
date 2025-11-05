
import ShowHousesInHomePage from "../components/home/ShowHousesInHomePage"

const Home = () => {
  return (
    <div dir="rtl" className="p-4 shadow w-full mt-3 sm:w-4/5 mx-auto lg:w-full">
        <h1 className="md:text-2xl text-xl font-bold text-gray-800">تمام خانه های موجود: همه</h1>
        <ShowHousesInHomePage />
    </div>
  )
}

export default Home