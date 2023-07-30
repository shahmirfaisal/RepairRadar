import { Flex, Heading, Image, Text, View } from "@aws-amplify/ui-react"
import { useState, useEffect } from "react"
import { LazyMessage, LazyUser } from "../../models"
import moment from "moment"

interface Props {
  message: LazyMessage
}

interface ExtendedLazyMessage extends LazyMessage {
  sender?: LazyUser
}

const Message = ({ message: initialMessage }: Props) => {
  const [message, setMessage] = useState<ExtendedLazyMessage | null>(
    initialMessage
  )

  useEffect(() => {
    ;(async () => {
      const sender = await message?.Sender
      setMessage({ ...message, sender })
    })()
  }, [])

  return (
    <View>
      <Flex alignItems="center" gap="10px">
        <Image
          src={message!.sender?.picture || "/blank-profile-picture.webp"}
          alt={message!.sender?.name}
          width="40px"
          height="40px"
          borderRadius="50%"
          objectFit="cover"
          objectPosition="center"
        />
        <Heading level={6}>{message!.sender?.name}</Heading>
        {/* format the date like this: Jul 24, 2023, 9:11 PM */}
        <Text fontSize="12px">
          {moment(message!.createdAt || new Date()).format(
            "MMM DD, YYYY, h:mm A"
          )}
        </Text>
      </Flex>

      <Text marginTop="10px">{message!.text}</Text>
    </View>
  )
}

export default Message
