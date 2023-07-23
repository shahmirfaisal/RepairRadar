import { Appointment as AppointmentModel, LazyAppointment } from "../models"
import { Heading, View } from "@aws-amplify/ui-react"
import AppointmentItem from "./AppointmentItem"

const AppointmentsSection = ({
  appointments,
  onAccept,
  onReject,
  onComplete,
  filter,
  title
}: {
  appointments: LazyAppointment[]
  onAccept?: (appointment: LazyAppointment) => Promise<void>
  onReject?: (appointment: LazyAppointment) => Promise<void>
  onComplete?: (appointment: LazyAppointment) => Promise<void>
  filter: (appointment: LazyAppointment) => boolean
  title: string
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
          />
        ))}
      </View>
    </View>
  )
}

export default AppointmentsSection
