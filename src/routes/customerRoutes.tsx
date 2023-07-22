import CustomerLayout from "../layouts/CustomerLayout"
import AppointmentsPage from "../pages/customer/AppointmentsPage"
import FindMechanicsPage from "../pages/customer/FindMechanicsPage"
import MechanicProfilePage from "../pages/customer/MechanicProfilePage"

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
        element: <h1>Customer Chat</h1>
      },
      {
        path: "/customer/profile",
        element: <h1>Customer Profile</h1>
      },
      {
        path: "/customer/mechanic-profile/:id",
        element: <MechanicProfilePage />
      }
    ]
  }
]
