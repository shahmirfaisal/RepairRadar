import { Routes, Route } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import { Toaster } from "react-hot-toast"
import EmailVerificationPage from "./pages/EmailVerificationPage"
import LogInPage from "./pages/LogInPage"
import { AuthContextProvider } from "./context/AuthContext"
import OnboardingPage from "./pages/OnboardingPage"
import CustomerLayout from "./layouts/CustomerLayout"

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/customer" element={<CustomerLayout />}>
          <Route path="find-mechanics" element={<h1>Find Mechanics</h1>} />
          <Route path="appointments" element={<h1>Customer Appointments</h1>} />
          <Route path="chat" element={<h1>Customer Chat</h1>} />
          <Route path="profile" element={<h1>Customer Profile</h1>} />
        </Route>
      </Routes>

      <Toaster />
    </AuthContextProvider>
  )
}

export default App
