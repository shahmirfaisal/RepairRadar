import { Flex, Grid, Heading, Image, Text, View } from "@aws-amplify/ui-react"
import { Outlet } from "react-router-dom"

const ChatItem = () => {
  return (
    <Flex
      gap="10px"
      alignItems="center"
      padding="15px"
      style={{ cursor: "pointer" }}
      className="chat-item"
      border="1px solid rgba(0,0,0,0.1)"
      borderWidth="1px 0 1px 0"
    >
      <Image
        src="/blank-profile-picture.webp"
        alt="Profile Picture"
        width="50px"
        height="50px"
        borderRadius="50%"
      />
      <Text>Shahmir Faisal</Text>
    </Flex>
  )
}

const ChatLayout = () => {
  return (
    <Grid templateColumns="250px 1fr">
      <View position="relative">
        <View
          borderWidth="0 2px 0 0"
          borderColor="rgba(0,0,0,0.1)"
          borderStyle="solid"
          position="fixed"
          top="0"
          //   left="0"
          bottom="0"
          width="250px"
        >
          <Heading
            level={5}
            textAlign="center"
            marginTop="20px"
            marginBottom="20px"
          >
            All Conversations
          </Heading>

          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </View>
      </View>

      <View>
        <Outlet />
      </View>
    </Grid>
  )
}

export default ChatLayout
