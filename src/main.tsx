import ReactDOM from "react-dom/client"
import "./index.css"
import { AmplifyProvider } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"
import awsmobile from "./aws-exports.js"
import "@aws-amplify/ui-react/styles.css"
import "@aws-amplify/ui-react-geo/styles.css"
import "leaflet/dist/leaflet.css"
import { studioTheme } from "./ui-components"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes/index.tsx"
import { customerRoutes } from "./routes/CustomerRoutes.tsx"
import { mechanicRoutes } from "./routes/mechanicRoutes.tsx"
import { AuthContextProvider } from "./context/AuthContext.tsx"
import { authRoutes } from "./routes/authRoutes.tsx"
import { Toaster } from "react-hot-toast"

Amplify.configure(awsmobile)

const router = createBrowserRouter([
  ...routes,
  ...authRoutes,
  ...customerRoutes,
  ...mechanicRoutes
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AmplifyProvider theme={studioTheme}>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>

    <Toaster />
  </AmplifyProvider>
)
