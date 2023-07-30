import { SidebarItem } from "../components/Sidebar/SidebarItem"
import withAuth from "../hoc/withAuth"
import { AiOutlineSchedule } from "react-icons/ai"
import { BsChatDots, BsPerson } from "react-icons/bs"
import UserLayout from "./UserLayout"

let MechanicLayout: React.FC = () => {
  return (
    <UserLayout>
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
    </UserLayout>
  )
}

MechanicLayout = withAuth(MechanicLayout, "Mechanic")

export default MechanicLayout
