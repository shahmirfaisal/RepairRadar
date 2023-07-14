export const formatUser = (user: UnFormattedUser) => {
  const formattedUser: User = {
    id: user.sub,
    name: user.name,
    email: user.email,
    type: user["custom:type"],
    picture: user.picture,
    latitude: user["custom:latitude"],
    longitude: user["custom:longitude"]
  }
  return formattedUser
}
