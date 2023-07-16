import { View } from "@aws-amplify/ui-react"
import { Link, useLocation } from "react-router-dom"

interface Props {
  children: string
  href: string
}

export const SidebarItem = ({ children, href }: Props) => {
  const location = useLocation()
  const isActive = location.pathname === `/customer/${href}`

  return (
    <View
      boxShadow="1px 1px 4px rgba(0,0,0,0.2)"
      textAlign="center"
      borderWidth={isActive ? "0 0 4px 0" : "0px"}
      borderColor="black"
      borderStyle="solid"
    >
      <Link
        to={href}
        style={{
          textDecoration: "none",
          color: "black",
          display: "block",
          padding: "10px"
        }}
      >
        {children}
      </Link>
    </View>
  )
}
