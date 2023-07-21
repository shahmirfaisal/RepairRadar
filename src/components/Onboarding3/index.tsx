import { Button, Flex, Heading, Text, View } from "@aws-amplify/ui-react"
import { useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { LocationMarker } from "./LocationMarker"

interface Props {
  saveLocationHandler: (location: LocationType | null) => Promise<void>
}

const Onboarding3 = ({ saveLocationHandler }: Props) => {
  const [pickedLocation, setPickedLocation] = useState<LocationType | null>(
    null
  )

  const pickCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPickedLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => {
        console.log(error)
      }
    )
  }

  return (
    <Flex direction="column" alignItems="center" gap="30px" marginTop="40px">
      <Heading level={1} textAlign="center">
        Provide Shop Location
      </Heading>

      <Button variation="primary" size="large" onClick={pickCurrentLocation}>
        Pick current location
      </Button>

      <Text>Or</Text>

      <Heading level={4}>Pick from the map</Heading>

      <View
        border="3px solid #161617"
        width={{ base: "100%", large: "800px" }}
        height="500px"
      >
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker
            pickedLocation={pickedLocation}
            setPickedLocation={setPickedLocation}
          />
        </MapContainer>
      </View>

      <Button
        variation="primary"
        size="large"
        onClick={() => saveLocationHandler(pickedLocation)}
      >
        Save Shop Location
      </Button>
    </Flex>
  )
}

export default Onboarding3
