import CustomerLayout from "../layouts/CustomerLayout"
import AppointmentsPage from "../pages/customer/AppointmentsPage"
import ChatLayout from "../layouts/ChatLayout"
import CustomerProfilePage from "../pages/customer/CustomerProfilePage"
import FindMechanicsPage from "../pages/customer/FindMechanicsPage"
import MechanicProfilePage from "../pages/customer/MechanicProfilePage"
import ChatPage from "../pages/ChatPage"

export const customerRoutes = [
  {
    element: <CustomerLayout />,
    children: [
      {
        path: "/customer/find-mechanics",
        element: <FindMechanicsPage />,
        title: "Find Mechanics"
      },
      {
        path: "/customer/appointments",
        element: <AppointmentsPage />,
        title: "Appointments"
      },
      {
        path: "/customer/chat",
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
        path: "/customer/profile",
        element: <CustomerProfilePage />,
        title: "Your Profile"
      },
      {
        path: "/customer/mechanic-profile/:id",
        element: <MechanicProfilePage />,
        title: "Mechanic Profile"
      }
    ]
  }
]
