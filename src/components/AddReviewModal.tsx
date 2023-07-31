import { View } from "@aws-amplify/ui-react"
import AddReview from "../ui-components/AddReview"
import { useState } from "react"
import { LazyAppointment, Review } from "../models"
import { DataStore } from "aws-amplify"
import { toast } from "react-hot-toast"

const AddReviewModal = ({
  onClose,
  appointment,
  getAppointments
}: {
  onClose: () => void
  appointment: LazyAppointment
  getAppointments: () => Promise<void>
}) => {
  const [rating, setRating] = useState(0)
  const [text, setText] = useState("")

  console.log(appointment)

  const addReviewHandler = async () => {
    try {
      if (!rating) throw new Error("Please select a rating")

      if (!text.trim().length) throw new Error("Please enter a review")

      const customer = await appointment.Customer
      const mechanic = await appointment.Mechanic
      const review = await DataStore.save(
        new Review({
          rating,
          text,
          Appointment: appointment,
          Customer: customer,
          Mechanic: mechanic
        })
      )
      console.log("review", review)
      toast.success("Review Added")
      await getAppointments()
      onClose()
    } catch (err) {
      const error = err as Error
      toast.error(error.message)
    }
  }

  return (
    <View
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="rgba(0,0,0,0.2)"
      style={{ zIndex: 1000, justifyContent: "center", alignItems: "center" }}
      display="flex"
    >
      <AddReview
        onAddReview={addReviewHandler}
        onCancel={onClose}
        overrides={{
          Rating39591198: {
            value: rating,
            onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              const targetElement = e.target as HTMLElement

              const parent =
                targetElement.parentNode?.parentNode?.parentNode?.parentNode
                  ?.parentNode
              const child =
                targetElement.parentNode?.parentNode?.parentNode?.parentNode

              if (
                (child! as HTMLElement).classList.contains(
                  "amplify-rating-icon-container"
                )
              ) {
                const rating =
                  [...parent!.children].indexOf(child! as Element) + 1
                setRating(rating)
              }
            }
          },

          TextAreaField: {
            value: text,
            onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
          }
        }}
      />
    </View>
  )
}

export default AddReviewModal
