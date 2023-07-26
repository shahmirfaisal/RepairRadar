import { Button, Flex, Heading, Image, View } from "@aws-amplify/ui-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import Map from "../../components/Map"
import { LazyReview, Review as ReviewModel } from "../../models"
import { useState, useEffect } from "react"
import { toast } from "react-hot-toast"
import { DataStore } from "aws-amplify"
import Review from "../../components/Review"

const MechanicProfilePage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [reviews, setReviews] = useState<LazyReview[]>([])

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
    <View marginBottom="100px">
      <Heading level={1} marginBottom="30px">
        Your Profile
      </Heading>

      <View marginTop="50px">
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

        <View
          border="3px solid #161617"
          width={{ base: "100%", large: "100%" }}
          marginTop="30px"
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

      <Heading level={2} marginTop="50px" marginBottom="20px">
        Reviews from Customers
      </Heading>

      <Flex direction="column">
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </Flex>
    </View>
  )
}

export default MechanicProfilePage
