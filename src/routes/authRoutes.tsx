import AuthLayout from "../layouts/AuthLayout"
import EmailVerificationPage from "../pages/EmailVerificationPage"
import LogInPage from "../pages/LogInPage"
import SignUpPage from "../pages/SignUpPage"

export const authRoutes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signup",
        element: <SignUpPage />
      },
      {
        path: "/auth/login",
        element: <LogInPage />
      },
      {
        path: "/auth/email-verification",
        element: <EmailVerificationPage />
      }
    ]
  }
]
