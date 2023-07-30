import { View } from "@aws-amplify/ui-react"

interface Props {
  children: any
  component?: any
  props: any
}

const LayoutItem = ({ children, component = View, ...props }: any) => {
  return (
    <View
      backgroundColor="white"
      marginTop="20px"
      padding={{ base: "10px", medium: "30px" }}
      borderRadius="10px"
      {...props}
      as={component}
    >
      {children}
    </View>
  )
}

export default LayoutItem
