import { Outlet } from "react-router"
import Header from "./Header"

function Root() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default Root