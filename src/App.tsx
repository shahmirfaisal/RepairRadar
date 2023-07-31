import { routes } from "./routes/index.tsx"
import { customerRoutes } from "./routes/CustomerRoutes.tsx"
import { mechanicRoutes } from "./routes/mechanicRoutes.tsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { authRoutes } from "./routes/authRoutes.tsx"

const router = createBrowserRouter([
  ...routes,
  ...authRoutes,
  ...customerRoutes,
  ...mechanicRoutes
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
