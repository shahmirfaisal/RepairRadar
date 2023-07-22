import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"

const withNoAuth = (Component: React.FC) => {
  return () => {
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
      if (user) {
        if (user.type === "Customer") {
          navigate("/customer/find-mechanics")
        }
        if (user.type === "Mechanic") {
          navigate("/mechanic/dashboard")
        }
      }
    }, [user])

    if (user) return null

    return <Component />
  }
}

export default withNoAuth
