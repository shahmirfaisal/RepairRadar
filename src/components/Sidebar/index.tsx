import { Flex, Heading, Image, Text } from "@aws-amplify/ui-react"
import { useAuth } from "../../context/AuthContext"

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()

  return (
    <Flex
      padding="40px 30px"
      boxShadow="1px 0px 5px rgba(0,0,0,0.1)"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      width="250px"
      direction="column"
      backgroundColor="#F0F3F4"
      borderRadius="10px"
      margin="10px"
      gap="20px"
    >
      {children}

      <Flex direction="column" marginTop="auto" alignItems="center" gap="10px">
        <Image
          src={user?.picture || "/blank-profile-picture.webp"}
          alt={user?.name}
          width="60px"
          height="60px"
          borderRadius="50%"
          border="3px solid white"
        />
        <Heading level={6}>{user?.name}</Heading>
        <Text fontSize="14px">{user?.email}</Text>
      </Flex>
    </Flex>
  )
}

export default Sidebar
