import { useEffect, useState } from "react"
import { DataStore } from "aws-amplify"
import {
  Appointment as AppointmentModel,
  LazyAppointment,
  LazyUser
} from "../../models"
import { useAuth } from "../../context/AuthContext"
import { Heading } from "@aws-amplify/ui-react"
import moment from "moment"
import AppointmentsSection from "../../components/AppointmentsSection"

interface ExtendedLazyAppointment extends LazyAppointment {
  mechanic?: LazyUser
  customer?: LazyUser
  Mechanic: Promise<LazyUser>
  Customer: Promise<LazyUser>
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

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) =>
          appointment.status === "REQUESTED" &&
          moment().isBefore(moment(appointment.time))
        }
        title="Requested"
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "ACCEPTED"}
        title="Accepted"
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "REJECTED"}
        title="Rejected"
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "COMPLETED"}
        title="Completed"
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) =>
          appointment.status === "REQUESTED" &&
          moment().isAfter(moment(appointment.time))
        }
        title="Expired"
      />
    </div>
  )
}

export default AppointmentsPage
