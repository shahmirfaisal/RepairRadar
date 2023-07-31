import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  View
} from "@aws-amplify/ui-react"
import { useEffect, useState } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import { Chat, LazyChat } from "../models"
import { toast } from "react-hot-toast"
import { DataStore } from "aws-amplify"
import { useAuth } from "../context/AuthContext"
import ChatItem from "../components/Chat/ChatItem"
import LayoutItem from "../components/LayoutItem"
import { AiFillCloseCircle } from "react-icons/ai"

const ChatLayout = () => {
  const [chats, setChats] = useState<LazyChat[]>([])
  const [showChats, setShowChats] = useState(false)
  const { user } = useAuth()
  const { id } = useParams()
  const { pathname } = useLocation()

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

  useEffect(() => {
    setShowChats(false)
  }, [pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grid
      templateColumns={{ base: "1fr", medium: "250px 1fr" }}
      gap="20px"
      marginTop="20px"
    >
      <View
        position={{ base: "fixed", medium: "relative" }}
        top="0"
        left="0"
        bottom="0"
        right="0"
        transform={{
          base: showChats ? "none" : "translateX(-100%)",
          medium: "none"
        }}
        backgroundColor={{ base: "#00000073", medium: "transparent" }}
        style={{ zIndex: "10000" }}
        padding={{ base: "20px", medium: "0px" }}
      >
        <LayoutItem
          position={{ base: "relative" }}
          overflow="auto"
          height={{ base: "100%", medium: "86vh" }}
          padding="0"
          marginTop="0"
          backgroundColor="white"
        >
          <View
            display={{ base: "block", medium: "none" }}
            position="absolute"
            top="10px"
            right="10px"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowChats(false)
            }}
          >
            <AiFillCloseCircle size={25} />
          </View>

          <Heading
            level={5}
            textAlign="center"
            marginTop="20px"
            marginBottom="20px"
          >
            All Conversations
          </Heading>

          {chats.length === 0 && (
            <Flex alignItems="center" justifyContent="center" height="86vh">
              <Text>No Conversations</Text>
            </Flex>
          )}

          {chats.map((chat) => (
            <>
              <ChatItem key={chat.id} chat={chat} type={user!.type} />
              {/* <ChatItem key={chat.id} chat={chat} type={user!.type} />
              <ChatItem key={chat.id} chat={chat} type={user!.type} />
              <ChatItem key={chat.id} chat={chat} type={user!.type} />
              <ChatItem key={chat.id} chat={chat} type={user!.type} /> */}
            </>
          ))}
        </LayoutItem>
      </View>

      <Button
        margin="0 20px"
        onClick={() => setShowChats(true)}
        display={{
          base: "block",
          medium: "none"
        }}
        textAlign="center"
      >
        View Conversations
      </Button>

      <LayoutItem padding="0" marginTop="0">
        {!id && (
          <Flex alignItems="center" justifyContent="center" height="86vh">
            <Heading level={5}>Start a conversation!</Heading>
          </Flex>
        )}

        <Outlet />
      </LayoutItem>
    </Grid>
  )
}

export default ChatLayout
