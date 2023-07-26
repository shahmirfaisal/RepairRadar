import { Grid, Heading, View } from "@aws-amplify/ui-react"
import MechanicsMap from "./MechanicsMap"
import { User } from "../../../models"
import { DataStore } from "aws-amplify"
import { useEffect, useState } from "react"
import { MechanicItemCollection } from "../../../ui-components"
import { useAuth } from "../../../context/AuthContext"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import MechanicItem from "../../../ui-components/MechanicItem"

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
      <Heading level={1} marginBottom="30px">
        Find Mechanics
      </Heading>
      <MechanicsMap mechanics={mechanics} />

      <Grid marginTop="50px">
        {mechanics.map((mechanic) => (
          <MechanicItem
            image={mechanic.picture}
            name={mechanic.name}
            location="Rawalpindi, Pakistan"
            onViewProfileClick={() =>
              navigate(`/customer/mechanic-profile/${mechanic.userId}`)
            }
          />
        ))}
      </Grid>
    </View>
  )
}

export default FindMechanicsPage
