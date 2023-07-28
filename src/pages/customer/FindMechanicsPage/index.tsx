import { Grid, Heading, View } from "@aws-amplify/ui-react"
import MechanicsMap from "./MechanicsMap"
import { LazyReview, Review, User } from "../../../models"
import { DataStore } from "aws-amplify"
import { useEffect, useState, useMemo } from "react"
import { MechanicItemCollection } from "../../../ui-components"
import { useAuth } from "../../../context/AuthContext"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import MechanicItem from "../../../ui-components/MechanicItem"

interface Props {
  mechanic: UserModel
}

const Mechanic = ({ mechanic }: Props) => {
  const navigate = useNavigate()
  const [reviews, setReviews] = useState<LazyReview[]>([])

  const rating = useMemo(() => {
    return (
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    )
  }, [reviews])

  const getReviews = async () => {
    try {
      const reviews = await DataStore.query(Review, (c) =>
        c.Mechanic.userId.eq(mechanic.userId)
      )
      setReviews(reviews)
      console.log(reviews)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <MechanicItem
      rating={rating}
      image={mechanic.picture}
      name={mechanic.name}
      location="Rawalpindi, Pakistan"
      onViewProfileClick={() =>
        navigate(`/customer/mechanic-profile/${mechanic.userId}`)
      }
    />
  )
}

const FindMechanicsPage = () => {
  const [mechanics, setMechanics] = useState<UserModel[]>([])
  const navigate = useNavigate()

  const getMechanics = async () => {
    try {
      const mechanics = await DataStore.query(User, (u) =>
        u.type.eq("Mechanic")
      )
      setMechanics(mechanics as UserModel[])
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getMechanics()
  }, [])

  return (
    <View>
      <View
        backgroundColor="white"
        marginTop="20px"
        padding="30px"
        borderRadius="10px"
      >
        <Heading level={2} marginBottom="30px" fontWeight={700}>
          Find Nearby Mechanics
        </Heading>
        <MechanicsMap mechanics={mechanics} />
      </View>

      <Grid
        marginTop="20px"
        templateColumns="1fr 1fr"
        borderRadius="10px"
        backgroundColor="white"
        overflow="hidden"
      >
        {mechanics.map((mechanic) => (
          <>
            <Mechanic mechanic={mechanic} key={mechanic.id} />
            <Mechanic mechanic={mechanic} key={mechanic.id} />
          </>
        ))}
      </Grid>
    </View>
  )
}

export default FindMechanicsPage
