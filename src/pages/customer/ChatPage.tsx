import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View
} from "@aws-amplify/ui-react"

interface Props {
  direction?: "left" | "right"
}

const Message = ({ direction = "left" }: Props) => {
  return (
    <View>
      <Flex alignItems="center" gap="10px">
        <Image
          src="/blank-profile-picture.webp"
          alt="Profile Picture"
          width="40px"
          height="40px"
          borderRadius="50%"
        />
        <Heading level={6}>Shahmir Faisal</Heading>
        <Text fontSize="12px">Jul 24, 2023, 9:11 PM</Text>
      </Flex>

      <Text marginTop="10px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quis.
      </Text>
    </View>
  )
}

const ChatPage = () => {
  return (
    <Flex direction="column" height="100vh">
      <Flex
        alignItems="center"
        gap="10px"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
        padding="10px 20px"
      >
        <Image
          src="/blank-profile-picture.webp"
          alt="Profile Picture"
          width="50px"
          height="50px"
          borderRadius="50%"
        />
        <Heading level={5}>Shahmir Faisal</Heading>
      </Flex>

      <Flex
        height="90vh"
        style={{ overflowY: "scroll" }}
        direction="column"
        gap="50px"
        padding="20px"
      >
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </Flex>

      <Flex margin="20px">
        <TextField
          grow="1"
          label=""
          placeholder="Your message..."
          innerEndComponent={<Button variation="primary">Send</Button>}
        />
      </Flex>
    </Flex>
  )
}

export default ChatPage
