import { useState, useEffect } from "react"
import { LazyReview, LazyUser } from "../models"
import ReviewItem from "../ui-components/ReviewItem"
import moment from "moment"

interface Props {
  review: LazyReview
}

interface ExtendedLazyReview extends LazyReview {
  mechanic?: LazyUser
  customer?: LazyUser
}

const Review = ({ review: initialReview }: Props) => {
  const [review, setReview] = useState<ExtendedLazyReview>(initialReview)

  useEffect(() => {
    void (async () => {
      const mechanic = await review.Mechanic
      const customer = await review.Customer

      setReview((review) => ({
        ...review,
        mechanic,
        customer
      }))
    })()
  }, [])

  return (
    <ReviewItem
      // formate the date like this July 12, 2023
      date={moment(review.createdAt).format("MMMM DD, YYYY")}
      image={review.customer?.picture || "/blank-profile-picture.webp"}
      name={review.customer?.name}
      review={review.text}
      rating={review.rating}
      overrides={{
        ReviewItem: {
          width: "100%"
        },
        "Frame 445": {
          direction: {
            base: "column",
            small: "row"
          },
          alignItems: {
            base: "flex-start",
            small: "center"
          }
        }
      }}
    />
  )
}

export default Review
