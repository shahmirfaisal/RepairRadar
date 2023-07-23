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
import AddReviewModal from "../../components/AddReviewModal"

interface ExtendedLazyAppointment extends LazyAppointment {
  mechanic?: LazyUser
  customer?: LazyUser
  Mechanic: Promise<LazyUser>
  Customer: Promise<LazyUser>
}

const AppointmentsPage = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<LazyAppointment[]>([])

  const [showModal, setShowModal] = useState(false)
  const [appointment, setAppointment] = useState<LazyAppointment | null>(null)

  const getAppointments = async () => {
    const appointments = await DataStore.query(AppointmentModel, (c) =>
      c.Customer.userId.eq(user!.id)
    )
    console.log(appointments)

    setAppointments(appointments)
  }

  const openModal = (appointment: LazyAppointment) => {
    setAppointment(appointment)
    setShowModal(true)
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
        type="Customer"
        title="Requested"
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "ACCEPTED"}
        type="Customer"
        title="Accepted"
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "REJECTED"}
        type="Customer"
        title="Rejected"
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "COMPLETED"}
        type="Customer"
        title="Completed"
        onAddReview={openModal}
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) =>
          appointment.status === "REQUESTED" &&
          moment().isAfter(moment(appointment.time))
        }
        type="Customer"
        title="Expired"
      />

      {showModal && appointment && (
        <AddReviewModal
          onClose={() => setShowModal(false)}
          appointment={appointment}
        />
      )}
    </div>
  )
}

export default AppointmentsPage
