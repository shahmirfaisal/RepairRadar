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
        element: <DashboardPage />
      },
      {
        path: "/mechanic/appointments",
        element: <AppointmentsPage />
      },
      {
        path: "/mechanic/chat",
        element: <ChatLayout />,
        children: [
          {
            path: ":id",
            element: <ChatPage />
          }
        ]
      },
      {
        path: "/mechanic/profile",
        element: <MechanicProfilePage />
      },
      {
        path: "/mechanic/profile/edit",
        element: <MechanicProfileEditPage />
      }
    ]
  }
]
