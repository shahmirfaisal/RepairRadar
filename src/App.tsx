import { Routes, Route } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import { Toaster } from "react-hot-toast"
import EmailVerificationPage from "./pages/EmailVerificationPage"
import LogInPage from "./pages/LoginPage"
import { AuthContextProvider } from "./context/AuthContext"
import OnboardingPage from "./pages/OnboardingPage"

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>

      <Toaster />
    </AuthContextProvider>
  )
}

export default App
