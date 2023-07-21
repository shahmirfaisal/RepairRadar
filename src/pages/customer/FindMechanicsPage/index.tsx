import { Heading, View } from "@aws-amplify/ui-react"
import MechanicsMap from "./MechanicsMap"
import { User } from "../../../models"
import { DataStore } from "aws-amplify"
import { useEffect, useState } from "react"
import { MechanicItemCollection } from "../../../ui-components"
import { useAuth } from "../../../context/AuthContext"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

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

      <View marginTop="50px">
        <MechanicItemCollection
          overrideItems={({ item, index }) => ({
            width: "100%",
            location: "Rawalpindi, Pakistan",
            onViewProfileClick: () =>
              navigate(`/customer/mechanic-profile/${item.userId}`)
          })}
        />
      </View>
    </View>
  )
}

export default FindMechanicsPage
