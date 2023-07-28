import { Flex, Heading } from "@aws-amplify/ui-react"

const Header = () => {
  return (
    <Flex
      backgroundColor="white"
      borderRadius="10px"
      padding="15px"
      justifyContent="center"
    >
      <Heading level={4} textAlign="center">
        Find Mechanics
      </Heading>
    </Flex>
  )
}

export default Header
