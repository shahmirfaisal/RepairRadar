import { useEffect, useState } from "react"
import { DataStore } from "aws-amplify"
import {
  Appointment as AppointmentModel,
  LazyAppointment,
  LazyUser
} from "../../models"
import { useAuth } from "../../context/AuthContext"
import { Appointment } from "../../ui-components"
import { Heading, View } from "@aws-amplify/ui-react"
import moment from "moment"

interface ExtendedLazyAppointment extends LazyAppointment {
  mechanic?: LazyUser
  customer?: LazyUser
}

const AppointmentItem = ({
  appointment: initialAppointment,
  onAccept,
  onReject,
  onComplete
}: {
  appointment: LazyAppointment
  onAccept?: (appointment: LazyAppointment) => Promise<void>
  onReject?: (appointment: LazyAppointment) => Promise<void>
  onComplete?: (appointment: LazyAppointment) => Promise<void>
}) => {
  const [showDescription, setShowDescription] = useState(false)
  const [appointment, setAppointment] =
    useState<ExtendedLazyAppointment>(initialAppointment)

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
          display: appointment.status === "REQUESTED" ? "flex" : "none"
        },
        "Frame 440": {
          display:
            appointment.status === "ACCEPTED" &&
            moment().isAfter(moment(appointment.time))
              ? "flex"
              : "none"
        }
      }}
    />
  )
}

const AppointmentsPage = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<LazyAppointment[]>([])

  const getAppointments = async () => {
    const appointments = await DataStore.query(AppointmentModel, (c) =>
      c.Mechanic.userId.eq(user!.id)
    )

    setAppointments(appointments)
  }

  const acceptAppointmentHandler = async (appointment: LazyAppointment) => {
    const newAppointment = await DataStore.save(
      AppointmentModel.copyOf(appointment, (updated) => {
        updated.status = "ACCEPTED"
      })
    )

    setAppointments((appointments) =>
      appointments.map((appointment) =>
        appointment.id === newAppointment.id ? newAppointment : appointment
      )
    )
  }

  const rejectAppointmentHandler = async (appointment: LazyAppointment) => {
    const newAppointment = await DataStore.save(
      AppointmentModel.copyOf(appointment, (updated) => {
        updated.status = "REJECTED"
      })
    )

    setAppointments((appointments) =>
      appointments.map((appointment) =>
        appointment.id === newAppointment.id ? newAppointment : appointment
      )
    )
  }

  const completeAppointmentHandler = async (appointment: LazyAppointment) => {
    const newAppointment = await DataStore.save(
      AppointmentModel.copyOf(appointment, (updated) => {
        updated.status = "COMPLETED"
      })
    )

    setAppointments((appointments) =>
      appointments.map((appointment) =>
        appointment.id === newAppointment.id ? newAppointment : appointment
      )
    )
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <div>
      <Heading level={1}>Appointments</Heading>

      <View marginTop="50px">
        <Heading level={3}>Requested</Heading>
        <View marginTop="10px">
          {appointments
            .filter((appointment) => appointment.status === "REQUESTED")
            .map((appointment) => (
              <AppointmentItem
                appointment={appointment}
                key={appointment.id}
                onAccept={acceptAppointmentHandler}
                onReject={rejectAppointmentHandler}
                onComplete={completeAppointmentHandler}
              />
            ))}
        </View>
      </View>

      <View marginTop="50px">
        <Heading level={3}>Accepted</Heading>
        <View marginTop="10px">
          {appointments
            .filter((appointment) => appointment.status === "ACCEPTED")
            .map((appointment) => (
              <AppointmentItem
                appointment={appointment}
                key={appointment.id}
                onAccept={acceptAppointmentHandler}
                onReject={rejectAppointmentHandler}
                onComplete={completeAppointmentHandler}
              />
            ))}
        </View>
      </View>

      <View marginTop="50px">
        <Heading level={3}>Rejected</Heading>
        <View marginTop="10px">
          {appointments
            .filter((appointment) => appointment.status === "REJECTED")
            .map((appointment) => (
              <AppointmentItem
                appointment={appointment}
                key={appointment.id}
                onAccept={acceptAppointmentHandler}
                onReject={rejectAppointmentHandler}
                onComplete={completeAppointmentHandler}
              />
            ))}
        </View>
      </View>

      <View marginTop="50px">
        <Heading level={3}>Completed</Heading>
        <View marginTop="10px">
          {appointments
            .filter((appointment) => appointment.status === "COMPLETED")
            .map((appointment) => (
              <AppointmentItem
                appointment={appointment}
                key={appointment.id}
                onAccept={acceptAppointmentHandler}
                onReject={rejectAppointmentHandler}
                onComplete={completeAppointmentHandler}
              />
            ))}
        </View>
      </View>
    </div>
  )
}

export default AppointmentsPage
