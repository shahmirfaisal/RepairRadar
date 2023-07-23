import { useEffect, useState } from "react"
import { LazyAppointment, LazyUser } from "../models"
import { Appointment } from "../ui-components"
import moment from "moment"

interface ExtendedLazyAppointment extends LazyAppointment {
  mechanic?: LazyUser
  customer?: LazyUser
}

const AppointmentItem = ({
  appointment: initialAppointment,
  onAccept,
  onReject,
  onComplete,
  type
}: {
  appointment: LazyAppointment
  onAccept?: (appointment: LazyAppointment) => Promise<void>
  onReject?: (appointment: LazyAppointment) => Promise<void>
  onComplete?: (appointment: LazyAppointment) => Promise<void>
  type: "Mechanic" | "Customer"
}) => {
  const [showDescription, setShowDescription] = useState(false)
  const [appointment, setAppointment] =
    useState<ExtendedLazyAppointment>(initialAppointment)
  console.log("appointment", appointment)
  useEffect(() => {
    ;(async () => {
      const mechanic = await appointment.Mechanic
      const customer = await appointment.Customer
      setAppointment((appointment) => ({
        ...appointment,
        mechanic,
        customer
      }))
    })()
  }, [initialAppointment])

  return (
    <Appointment
      name={appointment.customer?.name}
      image={appointment.customer?.picture}
      time={moment(appointment.time).format("MMMM Do YYYY, h:mm a")}
      descriptionLabel={
        showDescription ? "Hide description" : "View description"
      }
      description={appointment.description}
      onToggleDescription={() => setShowDescription(!showDescription)}
      onAccept={() => onAccept?.(initialAppointment)}
      onReject={() => onReject?.(initialAppointment)}
      onComplete={() => onComplete?.(initialAppointment)}
      overrides={{
        Appointment: {
          width: "100%"
        },
        "Here is the descripiton and that is it": {
          display: showDescription ? "block" : "none"
        },
        "View description": {
          style: {
            cursor: "pointer"
          }
        },
        "Frame 439": {
          display:
            appointment.status === "REQUESTED" &&
            moment().isBefore(moment(appointment.time)) &&
            type === "Mechanic"
              ? "flex"
              : "none"
        },
        "Frame 440": {
          display:
            appointment.status === "ACCEPTED" &&
            moment().isAfter(moment(appointment.time)) &&
            type === "Mechanic"
              ? "flex"
              : "none"
        }
      }}
    />
  )
}

export default AppointmentItem
