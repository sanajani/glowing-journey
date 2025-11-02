import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
        <h1>Nav</h1>
        <main><Outlet /></main>
        <footer>footer</footer>
    </div>
  )
}

export default RootLayout