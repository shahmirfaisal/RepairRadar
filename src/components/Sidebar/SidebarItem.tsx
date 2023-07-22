import { View } from "@aws-amplify/ui-react"
import { Link, useLocation } from "react-router-dom"

interface Props {
  children: string
  href?: string
  onClick?: () => Promise<void>
}

export const SidebarItem = ({ children, href, onClick }: Props) => {
  const location = useLocation()
  const isActive = location.pathname === `${href!}`

  return (
    <View
      boxShadow="1px 1px 4px rgba(0,0,0,0.2)"
      textAlign="center"
      borderWidth={isActive ? "0 0 4px 0" : "0px"}
      borderColor="black"
      borderStyle="solid"
    >
      {href ? (
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
      ) : (
        <button
          onClick={onClick}
          style={{
            display: "block",
            padding: "10px",
            backgroundColor: "transparent",
            border: "none",
            width: "100%",
            cursor: "pointer"
          }}
        >
          {children}
        </button>
      )}
    </View>
  )
}
