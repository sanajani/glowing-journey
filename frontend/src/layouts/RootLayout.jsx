// imported Navbar Component
import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
// import { useState } from "react";

const RootLayout = () => {

  
  return (
    <div className="min-h-screen relative">
      <Navbar />
      {/* <main className="min-h-screen relative top-40 lg:w-[70%] mx-auto"> */}
      <main className="min-h-screen mt-40 lg:w-[70%] mx-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-100 mt-3 text-center ">
        © 2026 Your Company. All rights reserved.
      </footer>
    </div>
  )
}

export default RootLayout