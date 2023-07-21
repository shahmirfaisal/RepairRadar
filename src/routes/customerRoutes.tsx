import CustomerLayout from "../layouts/CustomerLayout"
import AppointmentsPage from "../pages/customer/AppointmentsPage"
import FindMechanicsPage from "../pages/customer/FindMechanicsPage"
import MechanicProfilePage from "../pages/customer/MechanicProfilePage"

export const customerRoutes = [
  {
    path: "/customer",
    element: <CustomerLayout />,
    children: [
      {
        path: "find-mechanics",
        element: <FindMechanicsPage />
      },
      {
        path: "appointments",
        element: <AppointmentsPage />
      },
      {
        path: "chat",
        element: <h1>Customer Chat</h1>
      },
      {
        path: "profile",
        element: <h1>Customer Profile</h1>
      },
      {
        path: "mechanic-profile/:id",
        element: <MechanicProfilePage />
      }
    ]
  }
]
