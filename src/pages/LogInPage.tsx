import { Flex, Grid, Heading, Text, View } from "@aws-amplify/ui-react"
import SignUp from "../ui-components/SignUp"
import { useState } from "react"
import { Auth, DataStore } from "aws-amplify"
import { toast } from "react-hot-toast"
import { User } from "../models"
import LogIn from "../ui-components/LogIn"
import { useNavigate, useSearchParams, Link } from "react-router-dom"
import { useEffect } from "react"
import AuthLayout from "../layouts/AuthLayout"

const LogInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.get("email")) {
      setEmail(searchParams.get("email")!)
    }
  }, [searchParams])

  const loginHandler = async () => {
    try {
      const user = await Auth.signIn(email, password)

      toast.success("Logged in successfully!")
    } catch (error) {
      if (error.message.includes("User is not confirmed")) {
        toast.error("Email not verified!")
        return navigate(
          `/email-verification?email=${encodeURIComponent(email)}`
        )
      }
      if (error.message.includes("Incorrect")) {
        return toast.error("Incorrect email or password!")
      }
      toast.error(error.message)
    }
  }

  return (
    <AuthLayout>
      <Heading level={2}>Welcome Back!</Heading>
      <Text margin="20px 0 40px 0">Find Trusted Mechanics Near You.</Text>
      <LogIn
        width="100%"
        overrides={{
          "Frame 428": {
            width: "100%"
          },
          TextField: {
            value: email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
          },
          PasswordField: {
            width: "unset",
            grow: "1",
            shrink: "1",
            value: password,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
          },
          Button: {
            onClick: loginHandler,
            width: "100%"
          }
        }}
      />

      <Text marginTop="20px">
        <Link to="/signup">Don't have an account? SignUp</Link>
      </Text>
    </AuthLayout>
  )
}

export default LogInPage
