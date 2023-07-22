import MechanicLayout from "../layouts/MechanicLayout"
import AppointmentsPage from "../pages/mechanic/AppointmentsPage"
import ChatPage from "../pages/mechanic/ChatPage"
import DashboardPage from "../pages/mechanic/DashboardPage"
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
        element: <ChatPage />
      },
      {
        path: "/mechanic/profile",
        element: <MechanicProfilePage />
      },
      {
        path: "/mechanic/mechanic-profile/:id",
        element: <MechanicProfilePage />
      }
    ]
  }
]
