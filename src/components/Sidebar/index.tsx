import { Flex } from "@aws-amplify/ui-react"

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      padding="20px"
      boxShadow="1px 0px 5px rgba(0,0,0,0.1)"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      width="250px"
      direction="column"
      gap="20px"
    >
      {children}
    </Flex>
  )
}

export default Sidebar
