import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { AmplifyProvider } from "@aws-amplify/ui-react"
import { Amplify } from "aws-amplify"
import awsmobile from "./aws-exports.js"
import "@aws-amplify/ui-react/styles.css"
import { studioTheme } from "./ui-components"
import { BrowserRouter } from "react-router-dom"

Amplify.configure(awsmobile)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AmplifyProvider theme={studioTheme}>
      <App />
    </AmplifyProvider>
  </BrowserRouter>
)
