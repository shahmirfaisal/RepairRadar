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
  type: "Mechanic" | "Customer"
  picture: string | undefined
  latitude: string | undefined
  longitude: string | undefined
}

interface UserModel extends User {
  userId: string
}

interface AuthContextType {
  user: User | null
  authUser: any
  setPicture: (picture: string) => void
  setLocation: (location: LocationType) => void
  setName: (name: string) => void
}
