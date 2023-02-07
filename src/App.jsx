import { Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from "./pages/Home"
import "./style.css"

import SignIn from "./pages/Signin"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
