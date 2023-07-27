import { Grid, View } from "@aws-amplify/ui-react"
import { Outlet, useLocation } from "react-router-dom"
import { SidebarItem } from "../components/Sidebar/SidebarItem"
import Sidebar from "../components/Sidebar"
import withAuth from "../hoc/withAuth"
import { Auth } from "aws-amplify"

let CustomerLayout: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <Grid templateColumns="250px 1fr">
      <View>
        <Sidebar>
          <SidebarItem href="/customer/find-mechanics">
            Find Mechanics
          </SidebarItem>
          <SidebarItem href="/customer/appointments">Appointments</SidebarItem>
          <SidebarItem href="/customer/chat">Chat</SidebarItem>
          <SidebarItem href="/customer/profile">Profile</SidebarItem>
          <SidebarItem onClick={async () => await Auth.signOut()}>
            Logout
          </SidebarItem>
        </Sidebar>
      </View>

      {/* padding="30px" */}
      <View padding={pathname.includes("chat") ? "" : "30px"}>
        <Outlet />
      </View>
    </Grid>
  )
}

CustomerLayout = withAuth(CustomerLayout, "Customer")

export default CustomerLayout
