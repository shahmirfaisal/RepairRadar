import { View } from "@aws-amplify/ui-react"
import { IconType } from "react-icons"
import { Link, useLocation } from "react-router-dom"

interface Props {
  children: string
  href?: string
  onClick?: () => Promise<void>
  Icon?: IconType
}

export const SidebarItem = ({ children, href, onClick, Icon }: Props) => {
  const location = useLocation()
  const isActive = location.pathname === `${href!}`

  return (
    <View
      // boxShadow="1px 1px 4px rgba(0,0,0,0.2)"
      textAlign="center"
      // borderWidth={isActive ? "0 0 4px 0" : "0px"}
      // borderColor="black"
      // borderStyle="solid"
      backgroundColor={isActive ? "black" : "transparent"}
      color={isActive ? "white" : "black"}
      borderRadius="50px"
    >
      {href ? (
        <Link
          to={href}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px"
          }}
        >
          {Icon && <Icon size={25} />}
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            backgroundColor: "transparent",
            border: "none",
            width: "100%",
            cursor: "pointer"
          }}
        >
          {Icon && <Icon size={25} />}
          {children}
        </button>
      )}
    </View>
  )
}
