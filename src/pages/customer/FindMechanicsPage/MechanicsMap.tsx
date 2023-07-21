import { View } from "@aws-amplify/ui-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

interface Props {
  mechanics: UserModel[]
}

const MechanicsMap = ({ mechanics }: Props) => {
  return (
    <View border="3px solid #161617" width={{ base: "100%" }} height="500px">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mechanics.map((mechanic) => (
          <Marker
            key={mechanic.id}
            position={{
              lat: parseFloat(mechanic.latitude!),
              lng: parseFloat(mechanic.longitude!)
            }}
          >
            <Popup>{mechanic.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </View>
  )
}

export default MechanicsMap
