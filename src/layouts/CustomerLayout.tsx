import { SidebarItem } from "../components/Sidebar/SidebarItem"
import withAuth from "../hoc/withAuth"
import { CiSearch } from "react-icons/ci"
import { AiOutlineSchedule } from "react-icons/ai"
import { BsChatDots, BsPerson } from "react-icons/bs"
import UserLayout from "./UserLayout"

let CustomerLayout: React.FC = () => {
  return (
    <UserLayout>
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
    </UserLayout>
  )
}

CustomerLayout = withAuth(CustomerLayout, "Customer")

export default CustomerLayout
