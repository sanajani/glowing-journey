import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const AdminNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">MyDashboard</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link to="profile" className="hover:text-blue-600 transition-colors duration-200">Profile</Link>
          <Link to="newpost" className="hover:text-blue-600 transition-colors duration-200">Post a House</Link>
          <Link to="seepost" className="hover:text-blue-600 transition-colors duration-200">See My Posts</Link>
          <Link to="logout" className="text-red-500 hover:text-red-600 transition-colors duration-200">Logout</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden cursor-pointer text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setShowNav(true)}>
          <RxHamburgerMenu size={30} />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${showNav ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b bg-linear-to-r from-blue-600 to-blue-500 text-white">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setShowNav(false)} className="hover:text-gray-200 transition-colors"><IoMdClose size={26} /></button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-5 mt-10 text-lg font-medium text-gray-700">
          <Link to="profile" onClick={() => setShowNav(false)} className="hover:text-blue-600 transition-colors">Profile</Link>
          <Link to="newpost" onClick={() => setShowNav(false)} className="hover:text-blue-600 transition-colors">  Post a House</Link>
          <Link  to="seepost"  onClick={() => setShowNav(false)}   className="hover:text-blue-600 transition-colors">See My Posts</Link>
          <Link to="logout" onClick={() => setShowNav(false)} className="text-red-500 hover:text-red-600 transition-colors">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
