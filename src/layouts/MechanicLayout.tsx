import { Grid, View } from "@aws-amplify/ui-react"
import { Outlet, useLocation, useOutlet } from "react-router-dom"
import { SidebarItem } from "../components/Sidebar/SidebarItem"
import Sidebar from "../components/Sidebar"
import withAuth from "../hoc/withAuth"
import { Auth } from "aws-amplify"

import Header from "../components/Header"
import { CiSearch } from "react-icons/ci"
import { AiOutlineSchedule, AiOutlineLogout } from "react-icons/ai"
import { BsChatDots, BsPerson } from "react-icons/bs"

let MechanicLayout: React.FC = () => {
  const outlet = useOutlet()

  const title = outlet?.props.children.props.match.route.title

  return (
    <Grid templateColumns="250px 1fr">
      <View>
        <Sidebar>
          <SidebarItem href="/mechanic/dashboard">Dashboard</SidebarItem>
          <SidebarItem href="/mechanic/appointments" Icon={AiOutlineSchedule}>
            Appointments
          </SidebarItem>
          <SidebarItem href="/mechanic/chat" Icon={BsChatDots}>
            Chat
          </SidebarItem>
          <SidebarItem href="/mechanic/profile" Icon={BsPerson}>
            Profile
          </SidebarItem>
          <SidebarItem
            onClick={async () => await Auth.signOut()}
            Icon={AiOutlineLogout}
          >
            Logout
          </SidebarItem>
        </Sidebar>
      </View>

      <View padding={"10px 30px"}>
        <Header title={title as string} />
        <Outlet />
      </View>
    </Grid>
  )
}

MechanicLayout = withAuth(MechanicLayout, "Mechanic")

export default MechanicLayout
