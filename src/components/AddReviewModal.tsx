import { View } from "@aws-amplify/ui-react"
import AddReview from "../ui-components/AddReview"
import { useState } from "react"
import { LazyAppointment, Review } from "../models"
import { DataStore } from "aws-amplify"

const AddReviewModal = ({
  onClose,
  appointment
}: {
  onClose: () => void
  appointment: LazyAppointment
}) => {
  const [rating, setRating] = useState(0)
  const [text, setText] = useState("")

  console.log(appointment)

  const addReviewHandler = async () => {
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
    onClose()
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
