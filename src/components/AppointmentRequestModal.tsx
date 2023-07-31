import { View } from "@aws-amplify/ui-react"
import AppointmentRequest from "../ui-components/AppointmentRequest"
import { useState } from "react"
import { Appointment, LazyUser, User } from "../models"
import { DataStore } from "aws-amplify"
import { useAuth } from "../context/AuthContext"
import { toast } from "react-hot-toast"
import moment from "moment"

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  mechanic: LazyUser
}

const AppointmentRequestModal = ({ setShowModal, mechanic }: Props) => {
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("")
  const { user } = useAuth()

  const requestAppointmentHandler = async () => {
    console.log("request appointment", description, time)
    try {
      if (!description.trim().length) {
        throw new Error("Description is required!")
      }

      if (!time.trim().length) {
        throw new Error("Time is required!")
      }

      if (moment(time).isBefore(moment())) {
        throw new Error("Pick a time in the future!")
      }

      const customer = await DataStore.query(User, (c) => c.userId.eq(user!.id))
      const appointment = await DataStore.save(
        new Appointment({
          description,
          time,
          status: "REQUESTED",
          Mechanic: mechanic,
          Customer: customer[0]
        })
      )

      toast.success("Appointment requested!")
      setShowModal(false)
    } catch (err) {
      const error = err as Error
      toast.error(error.message)
    }
  }

  return (
    <View
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="rgba(0,0,0,0.2)"
      style={{ zIndex: 1000 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <AppointmentRequest
        overrides={{
          AppointmentRequest: {
            width: "700px"
          },
          TextAreaField: {
            value: description,
            onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
          },
          TextField: {
            type: "datetime-local",
            // value: time,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setTime(new Date(e.target.value).toISOString())
          }
        }}
        title="Shahmir"
        onCancel={() => setShowModal(false)}
        onRequest={requestAppointmentHandler}
      />
    </View>
  )
}

export default AppointmentRequestModal
