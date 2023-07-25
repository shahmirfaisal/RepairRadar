import { View } from "@aws-amplify/ui-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Map from "../../../components/Map"

interface Props {
  mechanics: UserModel[]
}

const MechanicsMap = ({ mechanics }: Props) => {
  return (
    <View border="3px solid #161617" width={{ base: "100%" }} height="500px">
      <Map
        center={[51.505, -0.09]}
        markers={mechanics.map((mechanic) => ({
          position: {
            lat: parseFloat(mechanic.latitude!),
            lng: parseFloat(mechanic.longitude!)
          },
          label: mechanic.name
        }))}
      />
    </View>
  )
}

export default MechanicsMap
