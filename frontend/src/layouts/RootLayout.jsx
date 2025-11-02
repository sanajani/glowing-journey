
// imported Navbar Component
import Navbar from "../components/navbar/Navbar"

const RootLayout = () => {
  return (
    <div className="min-h-screen h-[500vh] mx-auto bg-gray-500">
      <Navbar />
      <main className="min-h-screen pt-[120px] lg:w-[70%] mx-auto">
        main
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default RootLayout