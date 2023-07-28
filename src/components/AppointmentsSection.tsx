import {
  Appointment as AppointmentModel,
  LazyAppointment,
  LazyReview
} from "../models"
import { Heading, Text, View } from "@aws-amplify/ui-react"
import AppointmentItem from "./AppointmentItem"
import { IconType } from "react-icons"

interface Props {
  appointments: LazyAppointment[]
  onAccept?: (appointment: LazyAppointment) => Promise<void>
  onReject?: (appointment: LazyAppointment) => Promise<void>
  onComplete?: (appointment: LazyAppointment) => Promise<void>
  onAddReview?: (appointment: LazyAppointment) => void
  onViewReview?: (review: LazyReview) => void
  filter: (appointment: LazyAppointment) => boolean
  title: string
  type: "Mechanic" | "Customer"
  Icon?: IconType
}

const AppointmentsSection = ({
  appointments,
  onAccept,
  onReject,
  onComplete,
  onAddReview,
  onViewReview,
  filter,
  title,
  type,
  Icon
}: Props) => {
  return (
    <View backgroundColor="white" padding="30px" borderRadius="10px">
      <Heading level={3}>
        {Icon && <Icon size={25} />} {title}
      </Heading>
      <View marginTop="10px">
        {!appointments.filter(filter).length && <Text>No result!</Text>}
        {appointments.filter(filter).map((appointment) => (
          <AppointmentItem
            appointment={appointment}
            key={appointment.id}
            onAccept={onAccept}
            onReject={onReject}
            onComplete={onComplete}
            onAddReview={onAddReview}
            onViewReview={onViewReview}
            type={type}
          />
        ))}
      </View>
    </View>
  )
}

export default AppointmentsSection
