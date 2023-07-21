import EmailVerificationPage from "../pages/EmailVerificationPage"
import LogInPage from "../pages/LogInPage"
import OnboardingPage from "../pages/OnboardingPage"
import SignUpPage from "../pages/SignUpPage"

export const routes = [
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/login",
    element: <LogInPage />
  },
  {
    path: "/email-verification",
    element: <EmailVerificationPage />
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />
  }
]
