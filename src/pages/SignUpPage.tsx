import { Flex, Grid, Heading, Text, View } from "@aws-amplify/ui-react"
import SignUp from "../ui-components/SignUp"
import { useState } from "react"
import { Auth, DataStore } from "aws-amplify"
import { toast } from "react-hot-toast"
import { User } from "../models"
import { useNavigate } from "react-router-dom"

const SignUpPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [type, setType] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const signupHandler = async () => {
    try {
      if (!name.trim()) throw new Error("Enter a name!")
      if (type !== "Customer" && type !== "Mechanic")
        throw new Error("Select a type!")

      const res = await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
          email,
          "custom:type": "Mechanic"
        }
        // autoSignIn: {
        //   enabled: true
        // }
      })
      const user = await DataStore.save(
        new User({
          userId: res.userSub,
          name,
          email,
          type
        })
      )
      console.log(user)
      toast.success("Signed up successfully!")
      navigate(`/email-verification?email=${encodeURIComponent(email)}`)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div>
      <Grid templateColumns="1fr 1fr" minHeight="100vh">
        <View marginTop="40px" padding="0 15px">
          <View maxWidth="600px" margin="0 auto">
            <Heading level={2}>Welcome to RepairRadar</Heading>
            <Text margin="20px 0 40px 0">Find Trusted Mechanics Near You.</Text>
            <SignUp
              width="100%"
              overrides={{
                TextField29766936: {
                  value: name,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                },
                TextField38798040: {
                  value: email,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value),
                  grow: "1",
                  shrink: "1"
                },
                SelectField: {
                  value: type,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setType(e.target.value),
                  grow: "1",
                  shrink: "1",
                  children: (
                    <>
                      <option value="Customer">Customer</option>,
                      <option value="Mechanic">Mechanic</option>
                    </>
                  )
                },
                PasswordField: {
                  value: password,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value),
                  grow: "1",
                  shrink: "1"
                },
                Button: {
                  onClick: signupHandler
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

export default SignUpPage
