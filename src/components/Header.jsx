import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUser } from "../utils/fetchUser"

export default function Header() {
  const navigate = useNavigate()

  const user = fetchUser()

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem("user")
    navigate("/signin")
  }
  return (
    <div className="header">
      <h1 className="logo">Assignment</h1>
      {user && (
        <button className="logoutBtn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  )
}
