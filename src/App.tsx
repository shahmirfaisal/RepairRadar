import { Routes, Route } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import { Toaster } from "react-hot-toast"
import EmailVerificationPage from "./pages/EmailVerificationPage"
import LogInPage from "./pages/LogInPage"
import { AuthContextProvider } from "./context/AuthContext"
import OnboardingPage from "./pages/OnboardingPage"
import CustomerLayout from "./layouts/CustomerLayout"
import FindMechanics from "./pages/customer/FindMechanicsPage"
import MechanicProfilePage from "./pages/customer/MechanicProfilePage"
import AppointmentsPage from "./pages/customer/AppointmentsPage"
import CustomerRoutes from "./routes/CustomerRoutes"

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        <CustomerRoutes />
      </Routes>

      <Toaster />
    </AuthContextProvider>
  )
}

export default App
