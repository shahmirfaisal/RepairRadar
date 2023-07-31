import { Button, Text, View } from "@aws-amplify/ui-react"
import Map from "../../../components/Map"
import { usePickLocation } from "../../../hooks/usePickLocation"
import { useEffect } from "react"

interface Props {
  mechanics: UserModel[]
}

const MechanicsMap = ({ mechanics }: Props) => {
  const { pickCurrentLocation, pickedLocation } = usePickLocation(null)

  useEffect(() => {
    pickCurrentLocation()
  }, [])

  console.log("PICKED LOCATION", pickedLocation)

  if (!pickedLocation) {
    return (
      <View>
        <Text>Provide location!</Text>
        <Button onClick={pickCurrentLocation}>
          Provide your current location.
        </Button>
      </View>
    )
  }

  return (
    <View border="3px solid #D6DDE1" width={{ base: "100%" }} height="500px">
      <Map
        center={[pickedLocation!.latitude, pickedLocation!.longitude]}
        markers={mechanics.map((mechanic) => ({
          position: {
            lat: parseFloat(mechanic.latitude!),
            lng: parseFloat(mechanic.longitude!)
          },
          label: mechanic.name,
          userId: mechanic.userId
        }))}
      />
    </View>
  )
}

export default MechanicsMap
