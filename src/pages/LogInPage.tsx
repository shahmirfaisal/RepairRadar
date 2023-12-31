import { Heading, Text } from "@aws-amplify/ui-react"
import { useState } from "react"
import { Auth } from "aws-amplify"
import { toast } from "react-hot-toast"
import LogIn from "../ui-components/LogIn"
import { useNavigate, useSearchParams, Link } from "react-router-dom"
import { useEffect } from "react"

const LogInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.get("email")) {
      setEmail(searchParams.get("email")!)
    }
  }, [searchParams])

  const loginHandler = async () => {
    setLoading(true)
    try {
      await Auth.signIn(email, password)
      toast.success("Logged in successfully!")
    } catch (err) {
      const error = err as Error
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
    setLoading(false)
  }

  return (
    <>
      <Heading level={2}>Welcome Back!</Heading>
      <Text margin="20px 0 40px 0">Find Trusted Mechanics Near You.</Text>
      <LogIn
        width="100%"
        overrides={{
          TextField: {
            value: email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
          },
          PasswordField: {
            value: password,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
          },
          Button: {
            onClick: loginHandler,
            isLoading: loading,
            isDisabled: loading
          }
        }}
      />

      <Text marginTop="20px">
        <Link to="/auth/signup">Don't have an account? SignUp</Link>
      </Text>
    </>
  )
}

export default LogInPage
