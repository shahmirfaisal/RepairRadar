import { View } from "@aws-amplify/ui-react"
import { LazyReview } from "../models"
import ReviewView from "../ui-components/ReviewView"

const ReviewViewModal = ({
  onClose,
  review
}: {
  onClose: () => void
  review: LazyReview
}) => {
  return (
    <View
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="rgba(0,0,0,0.2)"
      style={{ zIndex: 1000 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <ReviewView rating={review.rating} text={review.text} onClose={onClose} />
    </View>
  )
}

export default ReviewViewModal
