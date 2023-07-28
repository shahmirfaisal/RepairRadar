import { Button, Flex, Heading, Image, TextField } from "@aws-amplify/ui-react"
import {
  Chat,
  LazyChat,
  LazyMessage,
  LazyUser,
  Message as MessageModel
} from "../models"
import { useParams } from "react-router-dom"
import { toast } from "react-hot-toast"
import { DataStore } from "aws-amplify"
import { useState, useEffect, useRef } from "react"
import Message from "../components/Chat/Message"
import { useAuth } from "../context/AuthContext"
import { AiOutlineSend } from "react-icons/ai"

interface ExtendedLazyChat extends LazyChat {
  customer?: LazyUser
  mechanic?: LazyUser
}

const ChatPage = () => {
  const [chat, setChat] = useState<ExtendedLazyChat | null>(null)
  const [lazyChat, setLazyChat] = useState<LazyChat | null>(null)
  const [messages, setMessages] = useState<LazyMessage[]>([])
  const [text, setText] = useState("")
  const { id } = useParams()
  const { user } = useAuth()
  const chatBody = useRef(null)

  const getChat = async () => {
    try {
      const chat = await DataStore.query(Chat, id!)
      const customer = await chat!.Customer
      const mechanic = await chat!.Mechanic

      setChat({ ...chat!, customer, mechanic })
      setLazyChat(chat!)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getMessages = async () => {
    try {
      const messages = await DataStore.query(MessageModel, (m) =>
        m.Chat.id.eq(id!)
      )
      console.log(messages)
      setMessages(messages)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getChat()
    getMessages()
  }, [id])

  useEffect(() => {
    const subscription = DataStore.observe(MessageModel).subscribe(
      (message) => {
        if (
          message.opType === "INSERT" &&
          message.element.messageChatId === id
        ) {
          setMessages((prev) => [...prev, message.element])
        }
        console.log("MESSAGE", message)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const sendMessageHandler = async () => {
    try {
      const message = await DataStore.save(
        new MessageModel({
          text,
          Chat: lazyChat,
          Sender: user?.type === "Customer" ? chat?.customer : chat?.mechanic
        })
      )
      console.log(message)
      setText("")
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    chatBody.current?.scrollTo(0, chatBody.current?.scrollHeight)
  }, [messages])

  if (!chat) {
    return <div>Loading...</div>
  }

  return (
    <Flex direction="column" height="86vh">
      <Flex
        alignItems="center"
        gap="10px"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
        padding="10px 20px"
      >
        <Image
          src={chat.mechanic?.picture || "/blank-profile-picture.webp"}
          alt={chat.mechanic?.name}
          width="50px"
          height="50px"
          borderRadius="50%"
        />
        <Heading level={5}>{chat.mechanic?.name}</Heading>
      </Flex>

      <Flex
        height="90vh"
        style={{ overflowY: "scroll" }}
        direction="column"
        gap="50px"
        padding="20px"
        ref={chatBody}
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Flex>

      <Flex margin="20px">
        <TextField
          grow="1"
          label=""
          placeholder="Your message..."
          innerEndComponent={
            <Button variation="primary" onClick={sendMessageHandler}>
              <AiOutlineSend size={20} />
            </Button>
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Flex>
    </Flex>
  )
}

export default ChatPage
