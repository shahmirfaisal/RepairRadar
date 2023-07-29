import ChatLayout from "../layouts/ChatLayout"
import MechanicLayout from "../layouts/MechanicLayout"
import AppointmentsPage from "../pages/mechanic/AppointmentsPage"
import ChatPage from "../pages/ChatPage"
import DashboardPage from "../pages/mechanic/DashboardPage"
import MechanicProfileEditPage from "../pages/mechanic/MechanicProfileEditPage"
import MechanicProfilePage from "../pages/mechanic/MechanicProfilePage"

export const mechanicRoutes = [
  {
    element: <MechanicLayout />,
    children: [
      {
        path: "/mechanic/dashboard",
        element: <DashboardPage />,
        title: "Dashboard"
      },
      {
        path: "/mechanic/appointments",
        element: <AppointmentsPage />,
        title: "Appointments"
      },
      {
        path: "/mechanic/chat",
        element: <ChatLayout />,
        title: "Chat",
        children: [
          {
            path: ":id",
            element: <ChatPage />
          }
        ]
      },
      {
        path: "/mechanic/profile",
        element: <MechanicProfilePage />,
        title: "Your Profile"
      },
      {
        path: "/mechanic/profile/edit",
        element: <MechanicProfileEditPage />,
        title: "Edit Profile"
      }
    ]
  }
]
