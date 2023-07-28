import { useEffect, useState } from "react"
import { DataStore } from "aws-amplify"
import {
  Appointment as AppointmentModel,
  LazyAppointment,
  LazyReview,
  LazyUser
} from "../../models"
import { useAuth } from "../../context/AuthContext"
import { Flex, Heading, View } from "@aws-amplify/ui-react"
import moment from "moment"
import AppointmentsSection from "../../components/AppointmentsSection"
import AddReviewModal from "../../components/AddReviewModal"
import ReviewViewModal from "../../components/ReviewViewModal"
import {
  AiOutlineQuestionCircle,
  AiOutlineCheckCircle,
  AiOutlineWarning
} from "react-icons/ai"
import { MdOutlineCancel } from "react-icons/md"
import { BiTimeFive } from "react-icons/bi"

const AppointmentsPage = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<LazyAppointment[]>([])

  const [showAddReviewModal, setShowAddReviewModal] = useState(false)
  const [showReviewViewModal, setShowReviewViewModal] = useState(false)
  const [appointment, setAppointment] = useState<LazyAppointment | null>(null)
  const [review, setReview] = useState<LazyReview | null>(null)

  const getAppointments = async () => {
    const appointments = await DataStore.query(AppointmentModel, (c) =>
      c.Customer.userId.eq(user!.id)
    )
    console.log(appointments)

    setAppointments(appointments)
  }

  const openAddReviewModal = (appointment: LazyAppointment) => {
    setAppointment(appointment)
    setShowAddReviewModal(true)
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
        filter={(appointment) =>
          appointment.status === "REQUESTED" &&
          moment().isBefore(moment(appointment.time))
        }
        type="Customer"
        title="Requested"
        Icon={AiOutlineQuestionCircle}
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "ACCEPTED"}
        type="Customer"
        title="Accepted"
        Icon={BiTimeFive}
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "REJECTED"}
        type="Customer"
        title="Rejected"
        Icon={MdOutlineCancel}
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) => appointment.status === "COMPLETED"}
        type="Customer"
        title="Completed"
        onAddReview={openAddReviewModal}
        onViewReview={openReviewViewModal}
        Icon={AiOutlineCheckCircle}
      />

      <AppointmentsSection
        appointments={appointments}
        filter={(appointment) =>
          appointment.status === "REQUESTED" &&
          moment().isAfter(moment(appointment.time))
        }
        type="Customer"
        title="Expired"
        Icon={AiOutlineWarning}
      />

      {showAddReviewModal && appointment && (
        <AddReviewModal
          onClose={() => setShowAddReviewModal(false)}
          appointment={appointment}
        />
      )}

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
