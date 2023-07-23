import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"

const withAuth = (Component: React.FC, type: "Mechanic" | "Customer") => {
  return () => {
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
      console.log(user)
      if (!user || (user && user.type !== type)) navigate("/auth/login")
    }, [user])

    if (!user || (user && user.type !== type)) return null

    return <Component />
  }
}

export default withAuth
