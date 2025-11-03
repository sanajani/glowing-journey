
// imported Navbar Component
import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-screen h-[500vh] relative top-40 lg:w-[70%] mx-auto">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default RootLayout