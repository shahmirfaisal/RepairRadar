import { Flex, Heading } from "@aws-amplify/ui-react"

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <Flex
      backgroundColor="white"
      borderRadius="10px"
      padding="15px"
      justifyContent="center"
    >
      <Heading level={4} textAlign="center">
        {title}
      </Heading>
    </Flex>
  )
}

export default Header
