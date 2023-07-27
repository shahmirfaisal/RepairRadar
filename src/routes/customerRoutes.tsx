import CustomerLayout from "../layouts/CustomerLayout"
import AppointmentsPage from "../pages/customer/AppointmentsPage"
import ChatLayout from "../layouts/ChatLayout"
import CustomerProfilePage from "../pages/customer/CustomerProfilePage"
import FindMechanicsPage from "../pages/customer/FindMechanicsPage"
import MechanicProfilePage from "../pages/customer/MechanicProfilePage"
import ChatPage from "../pages/customer/ChatPage"

export const customerRoutes = [
  {
    element: <CustomerLayout />,
    children: [
      {
        path: "/customer/find-mechanics",
        element: <FindMechanicsPage />
      },
      {
        path: "/customer/appointments",
        element: <AppointmentsPage />
      },
      {
        path: "/customer/chat",
        element: <ChatLayout />,
        children: [
          {
            path: ":id",
            element: <ChatPage />
          }
        ]
      },
      {
        path: "/customer/profile",
        element: <CustomerProfilePage />
      },
      {
        path: "/customer/mechanic-profile/:id",
        element: <MechanicProfilePage />
      }
    ]
  }
]
