import { useEffect, useState } from "react"
import { LazyAppointment, LazyReview, LazyUser, Review } from "../models"
import { Appointment } from "../ui-components"
import moment from "moment"
import { DataStore } from "aws-amplify"

interface ExtendedLazyAppointment extends LazyAppointment {
  mechanic?: LazyUser
  customer?: LazyUser
  review?: LazyReview
}

const AppointmentItem = ({
  appointment: initialAppointment,
  onAccept,
  onReject,
  onComplete,
  onAddReview,
  type
}: {
  appointment: LazyAppointment
  onAccept?: (appointment: LazyAppointment) => Promise<void>
  onReject?: (appointment: LazyAppointment) => Promise<void>
  onComplete?: (appointment: LazyAppointment) => Promise<void>
  onAddReview?: (appointment: LazyAppointment) => void
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
      const reviews = await DataStore.query(Review, (r) =>
        r.reviewAppointmentId.eq(appointment.id)
      )
      const review = reviews[0]
      console.log("review", review)
      setAppointment((appointment) => ({
        ...appointment,
        mechanic,
        customer,
        review
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
      onAddReview={() => onAddReview?.(initialAppointment)}
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
        },
        "Frame 441": {
          display:
            appointment.status === "COMPLETED" &&
            type === "Customer" &&
            !appointment.review
              ? "flex"
              : "none"
        }
      }}
    />
  )
}

export default AppointmentItem
