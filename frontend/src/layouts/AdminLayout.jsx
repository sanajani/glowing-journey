import { Outlet } from "react-router-dom"
import AdminNavbar from "../admin/components/AdminNavbar"

const AdminLayout = () => {
  return (
    <div className="overflow-hidden">
        <div className="">
            <AdminNavbar />
        </div>
        <div className="mt-20">
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout