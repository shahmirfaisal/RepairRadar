import { Grid, View } from "@aws-amplify/ui-react"
import { Outlet } from "react-router-dom"
import { SidebarItem } from "../components/Sidebar/SidebarItem"
import Sidebar from "../components/Sidebar"
import withAuth from "../hoc/withAuth"
import { Auth } from "aws-amplify"

let MechanicLayout: React.FC = () => {
  return (
    <Grid templateColumns="250px 1fr">
      <View>
        <Sidebar>
          <SidebarItem href="/mechanic/dashboard">Dashboard</SidebarItem>
          <SidebarItem href="/mechanic/appointments">Appointments</SidebarItem>
          <SidebarItem href="/mechanic/chat">Chat</SidebarItem>
          <SidebarItem href="/mechanic/profile">Profile</SidebarItem>
          <SidebarItem onClick={async () => await Auth.signOut()}>
            Logout
          </SidebarItem>
        </Sidebar>
      </View>

      <View padding="30px">
        <Outlet />
      </View>
    </Grid>
  )
}

MechanicLayout = withAuth(MechanicLayout, "Mechanic")

export default MechanicLayout
