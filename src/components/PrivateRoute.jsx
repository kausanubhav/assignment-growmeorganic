import { Navigate, Outlet } from "react-router-dom"
import { fetchUser } from "../utils/fetchUser"

const PrivateRoute = () => {
  const user = fetchUser()

  return user ? <Outlet /> : <Navigate to="/signin" />
}
export default PrivateRoute
