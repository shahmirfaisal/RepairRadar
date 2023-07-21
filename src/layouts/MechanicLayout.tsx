import { Flex, Grid, View } from "@aws-amplify/ui-react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { SidebarItem } from "../components/Sidebar/SidebarItem"
import Sidebar from "../components/Sidebar"

const MechanicLayout = () => {
  return (
    <Grid templateColumns="250px 1fr">
      <View>
        <Sidebar>
          <SidebarItem href="dashboard">Dashboard</SidebarItem>
          <SidebarItem href="appointments">Appointments</SidebarItem>
          <SidebarItem href="chat">Chat</SidebarItem>
          <SidebarItem href="profile">Profile</SidebarItem>
        </Sidebar>
      </View>

      <View padding="30px">
        <Outlet />
      </View>
    </Grid>
  )
}

export default MechanicLayout
