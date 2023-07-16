interface UnFormattedUser {
  sub: string
  name: string
  email: string
  "custom:type": string
  picture: string | undefined
  "custom:latitude": string | undefined
  "custom:longitude": string | undefined
}

interface User {
  id: string
  name: string
  email: string
  type: string
  picture: string | undefined
  latitude: string | undefined
  longitude: string | undefined
}

interface AuthContextType {
  user: User | null
  authUser: any
  setPicture: (picture: string) => void
  setLocation: (location: LocationType) => void
}
