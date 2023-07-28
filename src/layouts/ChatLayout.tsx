import { Flex, Grid, Heading, Image, Text, View } from "@aws-amplify/ui-react"
import { useEffect, useState } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { Chat, LazyChat, LazyUser } from "../models"
import { toast } from "react-hot-toast"
import { DataStore } from "aws-amplify"
import { useAuth } from "../context/AuthContext"
import ChatItem from "../components/Chat/ChatItem"

const ChatLayout = () => {
  const [chats, setChats] = useState<LazyChat[]>([])
  const { user } = useAuth()

  const getChats = async () => {
    try {
      const chats = await DataStore.query(Chat, (c) =>
        user!.type === "Customer"
          ? c.Customer.userId.eq(user!.id)
          : c.Mechanic.userId.eq(user!.id)
      )
      setChats(chats)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getChats()
  }, [])

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

          {chats.map((chat) => (
            <ChatItem key={chat.id} chat={chat} type={user!.type} />
          ))}
        </View>
      </View>

      <View>
        <Outlet />
      </View>
    </Grid>
  )
}

export default ChatLayout
