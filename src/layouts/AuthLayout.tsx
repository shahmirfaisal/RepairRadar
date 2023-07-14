import { Flex, Grid, Heading, View } from "@aws-amplify/ui-react"

interface Props {
  children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Grid templateColumns="1fr 1fr" minHeight="100vh">
      <View marginTop="40px" marginBottom="40px" padding="0 15px">
        <View maxWidth="600px" margin="0 auto">
          {children}
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
  )
}

export default AuthLayout
