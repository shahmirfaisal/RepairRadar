import MechanicLayout from "../layouts/MechanicLayout"
import AppointmentsPage from "../pages/mechanic/AppointmentsPage"
import ChatPage from "../pages/mechanic/ChatPage"
import DashboardPage from "../pages/mechanic/DashboardPage"
import MechanicProfilePage from "../pages/mechanic/MechanicProfilePage"

export const mechanicRoutes = [
  {
    path: "/mechanic",
    element: <MechanicLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "appointments",
        element: <AppointmentsPage />
      },
      {
        path: "chat",
        element: <ChatPage />
      },
      {
        path: "profile",
        element: <MechanicProfilePage />
      },
      {
        path: "mechanic-profile/:id",
        element: <MechanicProfilePage />
      }
    ]
  }
]
