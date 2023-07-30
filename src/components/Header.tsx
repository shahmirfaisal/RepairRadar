import { Flex, Heading, View } from "@aws-amplify/ui-react"
import { HiMenu } from "react-icons/hi"

interface Props {
  title: string
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ title, setShowSidebar }: Props) => {
  return (
    <Flex
      backgroundColor="white"
      borderRadius={{ base: "none", medium: "10px" }}
      padding="15px"
      justifyContent="center"
      boxShadow={{ base: "0 1px 4px rgba(0,0,0,0.1)", medium: "none" }}
    >
      <View display={{ base: "block", medium: "none" }}>
        <HiMenu size={25} onClick={() => setShowSidebar(true)} />
      </View>
      <Heading grow="1" level={4} textAlign="center">
        {title}
      </Heading>
    </Flex>
  )
}

export default Header
