import { Grid, View } from "@aws-amplify/ui-react"
import { Outlet, useLocation, useOutlet } from "react-router-dom"
import { SidebarItem } from "../components/Sidebar/SidebarItem"
import Sidebar from "../components/Sidebar"
import { Auth } from "aws-amplify"
import Header from "../components/Header"
import { AiOutlineLogout } from "react-icons/ai"
import { useState, useEffect } from "react"

interface Props {
  children: React.ReactNode
}

const UserLayout = ({ children }: Props) => {
  const outlet = useOutlet()
  const [showSidebar, setSetShowSidebar] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setSetShowSidebar(false)
  }, [pathname])

  const title = outlet?.props?.children?.props?.match?.route?.title as string

  return (
    <Grid
      templateColumns={{ base: "1fr", medium: "250px 1fr" }}
      backgroundColor={{
        base: "white",
        medium: "transparent"
      }}
    >
      <View
        display={{ base: showSidebar ? "block" : "none", medium: "block" }}
        style={{ zIndex: "1000" }}
        position={{ base: "fixed", medium: "relative" }}
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor={{ base: "#00000073", medium: "transparent" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSetShowSidebar(false)
          }
        }}
      >
        <Sidebar setShowSidebar={setSetShowSidebar}>
          {children}

          <SidebarItem
            onClick={async () => await Auth.signOut()}
            Icon={AiOutlineLogout}
          >
            Logout
          </SidebarItem>
        </Sidebar>
      </View>

      <View padding={{ base: "0", medium: "10px 30px" }}>
        <Header title={title} setShowSidebar={setSetShowSidebar} />
        <Outlet />
      </View>
    </Grid>
  )
}

export default UserLayout
