import { Flex, Grid, Heading, Text, View } from "@aws-amplify/ui-react"
import SignUp from "../ui-components/SignUp"
import { useState } from "react"
import { Auth, DataStore } from "aws-amplify"
import { toast } from "react-hot-toast"
import { User } from "../models"
import EmailVerification from "../ui-components/EmailVerification"
import { useNavigate, useSearchParams } from "react-router-dom"

const EmailVerificationPage = () => {
  const [code, setCode] = useState("")

  const [searchParams] = useSearchParams()
  const email = searchParams.get("email")

  const navigate = useNavigate()

  const verificationHandler = async () => {
    try {
      const message = await Auth.confirmSignUp(email, code)

      toast.success("Email verified! Please log in.")
      navigate(`/login?email=${encodeURIComponent(email!)}`)
    } catch (error) {
      if (error.message.includes("CONFIRMED")) {
        toast.error("Email already verified. Please log in!")
        return navigate(`/login?email=${encodeURIComponent(email!)}`)
      }

      toast.error(error.message)
    }
  }

  return (
    <div>
      <Grid templateColumns="1fr 1fr" minHeight="100vh">
        <View marginTop="40px" padding="0 15px">
          <View maxWidth="600px" margin="0 auto">
            <Heading level={2}>Verify Your Email</Heading>
            <Text margin="20px 0 40px 0">
              We sent a code to {email}. Put it below.
            </Text>
            <EmailVerification
              width="100%"
              overrides={{
                "Frame 428": {
                  width: "100%"
                },
                TextField: {
                  value: code,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setCode(e.target.value)
                },
                Button: {
                  onClick: verificationHandler,
                  width: "100%"
                }
              }}
            />
          </View>
        </View>

        <Flex
          height="100%"
          backgroundColor="#1A1A1C"
          justifyContent="center"
          alignItems="center"
        >
          <Heading level={3} color="white" textAlign="center">
            Find Trusted Mechanics Near You with RepairRadar
          </Heading>
        </Flex>
      </Grid>
    </div>
  )
}

export default EmailVerificationPage
