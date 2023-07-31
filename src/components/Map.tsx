import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon } from "leaflet"
import { Text } from "@aws-amplify/ui-react"
import { Link } from "react-router-dom"

interface Props {
  center: [number, number]
  markers: MarkerType[]
}

const icon = new Icon({
  iconUrl: "/marker.svg",
  iconSize: [35, 35]
})

const Map = ({ center, markers }: Props) => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker
          key={marker.label}
          position={marker.position}
          icon={icon}
          eventHandlers={{
            click() {
              console.log("HELLO")
            }
          }}
        >
          <Popup>
            <Text>
              <b>{marker.label}</b>
            </Text>
            {marker.userId && (
              <Link to={`/customer/mechanic-profile/${marker.userId}`}>
                Visit Profile
              </Link>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
