import { Button, Heading, Text } from "@aws-amplify/ui-react"
import { useState } from "react"
import { Auth } from "aws-amplify"
import { toast } from "react-hot-toast"
import EmailVerification from "../ui-components/EmailVerification"
import { useNavigate, useSearchParams } from "react-router-dom"

const EmailVerificationPage = () => {
  const [code, setCode] = useState("")

  const [searchParams] = useSearchParams()
  const email = searchParams.get("email")

  const navigate = useNavigate()

  const resendCode = async () => {
    try {
      await Auth.resendSignUp(email!)
      toast.success("Code resent!")
    } catch (err) {
      const error = err as Error
      toast.error(error.message)
    }
  }

  const verificationHandler = async () => {
    try {
      await Auth.confirmSignUp(email!, code)

      toast.success("Email verified! Please log in.")
      navigate(`/auth/login?email=${encodeURIComponent(email!)}`)
    } catch (err) {
      const error = err as Error
      if (error.message.includes("CONFIRMED")) {
        toast.error("Email already verified. Please log in!")
        return navigate(`/auth/login?email=${encodeURIComponent(email!)}`)
      }

      toast.error(error.message)
    }
  }

  return (
    <>
      <Heading level={2}>Verify Your Email</Heading>
      <Text margin="20px 0 40px 0">
        We sent a code to {email}. Put it below.
      </Text>
      <EmailVerification
        width="100%"
        overrides={{
          TextField: {
            value: code,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setCode(e.target.value)
          },
          Button: {
            onClick: verificationHandler
          }
        }}
      />

      <Text marginTop="20px">
        Didn't receive the code?{" "}
        <Button variation="link" onClick={resendCode}>
          Resend
        </Button>
      </Text>
    </>
  )
}

export default EmailVerificationPage
