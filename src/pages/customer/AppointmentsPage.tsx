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
  Mechanic: Promise<LazyUser>
  Customer: Promise<LazyUser>
}

const AppointmentItem = ({
  appointment
}: {
  appointment: ExtendedLazyAppointment
}) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <Appointment
      name={appointment.mechanic?.name}
      image={appointment.mechanic?.picture}
      time={moment(appointment.time).format("MMMM Do YYYY, h:mm a")}
      descriptionLabel={
        showDescription ? "Hide description" : "View description"
      }
      description={appointment.description}
      onToggleDescription={() => setShowDescription(!showDescription)}
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
        }
      }}
    />
  )
}

const AppointmentsPage = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<ExtendedLazyAppointment[]>(
    []
  )

  const getAppointments = async () => {
    let appointments = (await DataStore.query(AppointmentModel, (c) =>
      c.Customer.userId.eq(user!.id)
    )) as unknown as ExtendedLazyAppointment[]

    appointments = await Promise.all(
      appointments.map(async (appointment) => {
        const mechanic = await appointment.Mechanic
        const customer = await appointment.Customer
        return {
          ...appointment,
          mechanic,
          customer
        }
      })
    )

    setAppointments(appointments)
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
              <AppointmentItem appointment={appointment} />
            ))}
        </View>
      </View>

      <View marginTop="50px">
        <Heading level={3}>Accepted</Heading>
        <View marginTop="10px">
          {appointments
            .filter((appointment) => appointment.status === "ACCEPTED")
            .map((appointment) => (
              <AppointmentItem appointment={appointment} />
            ))}
        </View>
      </View>
    </div>
  )
}

export default AppointmentsPage
