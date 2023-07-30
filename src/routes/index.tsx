import LandingPage from "../pages/LandingPage"
import OnboardingPage from "../pages/OnboardingPage"

export const routes = [
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />
  }
]
