import { Appointment as AppointmentModel, LazyAppointment } from "../models"
import { Heading, View } from "@aws-amplify/ui-react"
import AppointmentItem from "./AppointmentItem"

const AppointmentsSection = ({
  appointments,
  onAccept,
  onReject,
  onComplete,
  onAddReview,
  filter,
  title,
  type
}: {
  appointments: LazyAppointment[]
  onAccept?: (appointment: LazyAppointment) => Promise<void>
  onReject?: (appointment: LazyAppointment) => Promise<void>
  onComplete?: (appointment: LazyAppointment) => Promise<void>
  onAddReview?: (appointment: LazyAppointment) => void
  filter: (appointment: LazyAppointment) => boolean
  title: string
  type: "Mechanic" | "Customer"
}) => {
  return (
    <View marginTop="50px">
      <Heading level={3} textDecoration="underline">
        {title}
      </Heading>
      <View marginTop="10px">
        {appointments.filter(filter).map((appointment) => (
          <AppointmentItem
            appointment={appointment}
            key={appointment.id}
            onAccept={onAccept}
            onReject={onReject}
            onComplete={onComplete}
            onAddReview={onAddReview}
            type={type}
          />
        ))}
      </View>
    </View>
  )
}

export default AppointmentsSection
