import { Button, Flex, Heading, Image, View } from "@aws-amplify/ui-react"
import { useEffect, useState } from "react"
import { LazyReview, User, Review as ReviewModel } from "../../models"
import { useParams } from "react-router-dom"
import { DataStore } from "aws-amplify"
import { toast } from "react-hot-toast"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import AppointmentRequest from "../../ui-components/AppointmentRequest"
import AppointmentRequestModal from "../../components/AppointmentRequestModal"
import Map from "../../components/Map"
import Review from "../../components/Review"

const MechanicProfilePage = () => {
  const [mechanic, setMechanic] = useState<UserModel | null>(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)

  const [reviews, setReviews] = useState<LazyReview[]>([])

  const getReviews = async () => {
    try {
      const reviews = await DataStore.query(ReviewModel, (c) =>
        c.Mechanic.userId.eq(id!)
      )
      setReviews(reviews)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getMechanic = async () => {
    try {
      const mechanic = await DataStore.query(User, (u) => u.userId.eq(id!))

      setMechanic(mechanic[0] as UserModel)
    } catch (error) {
      toast.error(error.message)
    }

    setLoading(false)
  }

  useEffect(() => {
    getMechanic()
    getReviews()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <View marginBottom="100px">
      <Heading level={1} marginBottom="30px">
        Mechanic Profile
      </Heading>

      <View marginTop="50px">
        <Image
          src={mechanic?.picture}
          width="150px"
          height="150px"
          objectFit="contain"
          backgroundColor="#dedede"
          borderRadius="50%"
        />

        <Heading level={3} marginTop="10px">
          {mechanic?.name}
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
                  lat: parseFloat(mechanic?.latitude!),
                  lng: parseFloat(mechanic?.longitude!)
                },
                label: mechanic?.name
              }
            ]}
            center={[+mechanic?.latitude, +mechanic?.longitude]}
          />
        </View>

        <Flex marginTop="50px">
          <Button size="large">Contact Mechanic</Button>
          <Button
            variation="primary"
            size="large"
            onClick={() => setShowModal(true)}
          >
            Request Appointment
          </Button>
        </Flex>
      </View>

      <Heading level={2} marginTop="50px" marginBottom="20px">
        Reviews from Customers
      </Heading>

      <Flex direction="column">
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </Flex>

      {showModal && (
        <AppointmentRequestModal
          setShowModal={setShowModal}
          mechanic={mechanic!}
        />
      )}
    </View>
  )
}

export default MechanicProfilePage
