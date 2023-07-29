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

let CustomerLayout: React.FC = (props: any) => {
  const outlet = useOutlet()

  const title = outlet?.props.children.props.match.route.title

  return (
    <Grid templateColumns="250px 1fr">
      <View>
        <Sidebar>
          <SidebarItem href="/customer/find-mechanics" Icon={CiSearch}>
            Find Mechanics
          </SidebarItem>
          <SidebarItem href="/customer/appointments" Icon={AiOutlineSchedule}>
            Appointments
          </SidebarItem>
          <SidebarItem href="/customer/chat" Icon={BsChatDots}>
            Chat
          </SidebarItem>
          <SidebarItem href="/customer/profile" Icon={BsPerson}>
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

      {/* padding="30px" */}
      <View padding={"10px 30px"}>
        <Header title={title as string} />
        <Outlet />
      </View>
    </Grid>
  )
}

CustomerLayout = withAuth(CustomerLayout, "Customer")

export default CustomerLayout
