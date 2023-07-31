import { useEffect, useState } from "react"
import { DataStore } from "aws-amplify"
import {
  Appointment as AppointmentModel,
  LazyAppointment,
  LazyReview
} from "../../models"
import { useAuth } from "../../context/AuthContext"
import { Flex } from "@aws-amplify/ui-react"
import moment from "moment"
import AppointmentsSection from "../../components/AppointmentsSection"
import ReviewViewModal from "../../components/ReviewViewModal"
import {
  AiOutlineQuestionCircle,
  AiOutlineCheckCircle,
  AiOutlineWarning
} from "react-icons/ai"
import { MdOutlineCancel } from "react-icons/md"
import { BiTimeFive } from "react-icons/bi"
import { toast } from "react-hot-toast"

const AppointmentsPage = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<LazyAppointment[]>([])
  const [showReviewViewModal, setShowReviewViewModal] = useState(false)
  const [review, setReview] = useState<LazyReview | null>(null)

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
    toast.success("Appointment Accepted")
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

    toast.error("Appointment Rejected")
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

    toast.success("Appointment Completed")
  }

  const openReviewViewModal = (review: LazyReview) => {
    setReview(review)
    setShowReviewViewModal(true)
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <Flex direction="column" gap="20px" marginTop="20px">
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
        Icon={AiOutlineQuestionCircle}
      />

      <AppointmentsSection
        appointments={appointments}
        onAccept={acceptAppointmentHandler}
        onReject={rejectAppointmentHandler}
        onComplete={completeAppointmentHandler}
        filter={(appointment) => appointment.status === "ACCEPTED"}
        type="Mechanic"
        title="Accepted"
        Icon={BiTimeFive}
      />

      <AppointmentsSection
        appointments={appointments}
        onAccept={acceptAppointmentHandler}
        onReject={rejectAppointmentHandler}
        onComplete={completeAppointmentHandler}
        filter={(appointment) => appointment.status === "REJECTED"}
        type="Mechanic"
        title="Rejected"
        Icon={MdOutlineCancel}
      />

      <AppointmentsSection
        appointments={appointments}
        onAccept={acceptAppointmentHandler}
        onReject={rejectAppointmentHandler}
        onComplete={completeAppointmentHandler}
        onViewReview={openReviewViewModal}
        filter={(appointment) => appointment.status === "COMPLETED"}
        type="Mechanic"
        title="Completed"
        Icon={AiOutlineCheckCircle}
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
        Icon={AiOutlineWarning}
      />

      {showReviewViewModal && review && (
        <ReviewViewModal
          onClose={() => setShowReviewViewModal(false)}
          review={review}
        />
      )}
    </Flex>
  )
}

export default AppointmentsPage
