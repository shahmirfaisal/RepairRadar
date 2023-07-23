import { useEffect, useState } from "react"
import { DataStore } from "aws-amplify"
import { Appointment as AppointmentModel, LazyAppointment } from "../../models"
import { useAuth } from "../../context/AuthContext"
import { Heading } from "@aws-amplify/ui-react"
import moment from "moment"
import AppointmentsSection from "../../components/AppointmentsSection"

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

      <AppointmentsSection
        appointments={appointments}
        onAccept={acceptAppointmentHandler}
        onReject={rejectAppointmentHandler}
        onComplete={completeAppointmentHandler}
        filter={(appointment) =>
          appointment.status === "REQUESTED" &&
          moment().isBefore(moment(appointment.time))
        }
        type="Mechanic"
        title="Requested"
      />

      <AppointmentsSection
        appointments={appointments}
        onAccept={acceptAppointmentHandler}
        onReject={rejectAppointmentHandler}
        onComplete={completeAppointmentHandler}
        filter={(appointment) => appointment.status === "ACCEPTED"}
        type="Mechanic"
        title="Accepted"
      />

      <AppointmentsSection
        appointments={appointments}
        onAccept={acceptAppointmentHandler}
        onReject={rejectAppointmentHandler}
        onComplete={completeAppointmentHandler}
        filter={(appointment) => appointment.status === "REJECTED"}
        type="Mechanic"
        title="Rejected"
      />

      <AppointmentsSection
        appointments={appointments}
        onAccept={acceptAppointmentHandler}
        onReject={rejectAppointmentHandler}
        onComplete={completeAppointmentHandler}
        filter={(appointment) => appointment.status === "COMPLETED"}
        type="Mechanic"
        title="Completed"
      />

      <AppointmentsSection
        appointments={appointments}
        onAccept={acceptAppointmentHandler}
        onReject={rejectAppointmentHandler}
        onComplete={completeAppointmentHandler}
        filter={(appointment) =>
          appointment.status === "REQUESTED" &&
          moment().isAfter(moment(appointment.time))
        }
        type="Mechanic"
        title="Expired"
      />
    </div>
  )
}

export default AppointmentsPage
