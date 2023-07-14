import { Auth, Hub } from "aws-amplify"
import { createContext, useContext, useEffect, useState } from "react"
import { formatUser } from "../utils/user.utils"

interface AuthContextType {
  user: User | null
}

const AuthContext = createContext<AuthContextType>({
  user: null
})

export const useAuth = () => useContext(AuthContext)

interface Props {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUser(formatUser(user.attributes))
    } catch (error) {
      setUser(null)
    }
  }

  useEffect(() => {
    getCurrentUser()

    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event, data)
      if (event === "signIn") {
        setUser(formatUser(data.attributes))
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
