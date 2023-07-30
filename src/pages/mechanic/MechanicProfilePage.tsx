import {
  Button,
  Flex,
  Heading,
  Image,
  Rating,
  Text,
  View
} from "@aws-amplify/ui-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import Map from "../../components/Map"
import { LazyReview, Review as ReviewModel } from "../../models"
import { useState, useEffect, useMemo } from "react"
import { toast } from "react-hot-toast"
import { DataStore } from "aws-amplify"
import Review from "../../components/Review"
import LayoutItem from "../../components/LayoutItem"

const MechanicProfilePage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [reviews, setReviews] = useState<LazyReview[]>([])

  const rating = useMemo(() => {
    return (
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    )
  }, [reviews])

  const getReviews = async () => {
    try {
      const reviews = await DataStore.query(ReviewModel, (c) =>
        c.Mechanic.userId.eq(user!.id)
      )
      setReviews(reviews)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <View>
      <LayoutItem>
        <Image
          alt={user?.name}
          src={user?.picture}
          width="150px"
          height="150px"
          objectFit="contain"
          backgroundColor="#dedede"
          borderRadius="50%"
        />

        <Heading level={3} marginTop="10px">
          {user?.name}
        </Heading>

        <Heading level={5} marginTop="10px">
          {user?.email}
        </Heading>

        <Flex alignItems="center" marginTop="10px" wrap="wrap">
          <Rating value={rating} />
          <Text fontWeight="600">{rating}</Text>
          <Text color="rgba(0,0,0,0.8)">
            ({reviews.length} Review{reviews.length > 1 ? "s" : ""})
          </Text>
        </Flex>

        <Heading level={4} margin="30px 0 10px 0" textDecoration="underline">
          Shop Location:
        </Heading>
        <View
          border="3px solid #D6DDE1"
          width={{ base: "100%", large: "100%" }}
          height="500px"
        >
          <Map
            markers={[
              {
                position: {
                  lat: parseFloat(user!.latitude!),
                  lng: parseFloat(user!.longitude!)
                },
                label: user!.name
              }
            ]}
            center={[+user!.latitude!, +user!.longitude!]}
          />
        </View>

        <Flex marginTop="50px">
          <Button
            variation="primary"
            size="large"
            onClick={() => navigate("/mechanic/profile/edit")}
          >
            Edit Profile
          </Button>
        </Flex>
      </LayoutItem>

      <LayoutItem>
        <Heading level={2} marginBottom="20px">
          Reviews from Customers
        </Heading>

        <Flex direction="column">
          {reviews.map((review) => (
            <Review review={review} />
          ))}
        </Flex>
      </LayoutItem>
    </View>
  )
}

export default MechanicProfilePage
