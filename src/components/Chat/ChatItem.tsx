import { Flex, Image, Text } from "@aws-amplify/ui-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { LazyChat, LazyUser } from "../../models"

interface Props {
  chat: LazyChat
  type: "Customer" | "Mechanic"
}

interface ExtendedLazyChat extends LazyChat {
  customer?: LazyUser
  mechanic?: LazyUser
}

const ChatItem = ({ chat: initialChat, type }: Props) => {
  const [chat, setChat] = useState<ExtendedLazyChat>(initialChat)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      const customer = await chat.Customer
      const mechanic = await chat.Mechanic

      setChat((prev) => ({ ...prev, customer, mechanic }))
    })()
  }, [])

  return (
    <Flex
      onClick={() => (id !== chat.id ? navigate(`${chat.id}`) : null)}
      gap="10px"
      alignItems="center"
      padding="15px"
      style={{ cursor: "pointer" }}
      className={`chat-item ${id === chat.id ? "active" : ""}`}
      border="1px solid rgba(0,0,0,0.1)"
      borderWidth="1px 0 1px 0"
    >
      <Image
        src={
          (type === "Customer"
            ? chat.mechanic?.picture
            : chat.customer?.picture) || "/blank-profile-picture.webp"
        }
        alt={type === "Customer" ? chat.mechanic?.name : chat.customer?.name}
        width="50px"
        height="50px"
        borderRadius="50%"
        objectFit="cover"
        objectPosition="center"
      />
      <Text>
        {type === "Customer" ? chat.mechanic?.name : chat.customer?.name}
      </Text>
    </Flex>
  )
}

export default ChatItem
