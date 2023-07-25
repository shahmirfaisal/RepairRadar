import { Auth, Hub } from "aws-amplify"
import { createContext, useContext, useEffect, useState } from "react"
import { formatUser } from "../utils/user.utils"

const AuthContext = createContext<AuthContextType>({
  user: null,
  authUser: null,
  setPicture: () => undefined,
  setLocation: () => undefined,
  setName: () => undefined
})

export const useAuth = () => useContext(AuthContext)

interface Props {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)
  const [authUser, setAuthUser] = useState<any>(null)
  const [loadingCurrentUser, setLoadingCurrentUser] = useState(true)

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUser(formatUser(user.attributes))
      setAuthUser(user)
    } catch (error) {
      setUser(null)
      setAuthUser(null)
    }

    setLoadingCurrentUser(false)
  }

  useEffect(() => {
    getCurrentUser()

    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log("EVENT DATA", event, data)
      if (event === "signIn") {
        setUser(formatUser(data.attributes))
        setAuthUser(data)
      }
      if (event === "signOut") {
        setUser(null)
        setAuthUser(null)
      }
    })
  }, [])

  const setPicture = (picture: string) => {
    setUser((prev) => ({ ...prev, picture }))
    // can also set the authUser
  }

  const setLocation = (location: LocationType) => {
    setUser((prev) => ({ ...prev, ...location }))
    // can also set the authUser
  }

  const setName = (name: string) => {
    setUser((prev) => ({ ...prev, name }))
    // can also set the authUser
  }

  if (loadingCurrentUser) return <div>Loading...</div>

  return (
    <AuthContext.Provider
      value={{
        user,
        authUser,
        setPicture,
        setLocation,
        setName
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
