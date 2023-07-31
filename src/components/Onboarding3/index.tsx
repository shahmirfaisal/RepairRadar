import { Button, Flex, Heading, Text, View } from "@aws-amplify/ui-react"
import { useState } from "react"
import LocationPickerMap from "../LocationPickerMap"
import { usePickLocation } from "../../hooks/usePickLocation"
import { useNavigate } from "react-router-dom"

const Onboarding3 = () => {
  const {
    pickedLocation,
    setPickedLocation,
    pickCurrentLocation,
    saveLocation
  } = usePickLocation(null)
  const navigate = useNavigate()

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
        <LocationPickerMap
          center={[51.505, -0.09]}
          pickedLocation={pickedLocation}
          setPickedLocation={setPickedLocation}
        />
      </View>

      <Button
        variation="primary"
        size="large"
        onClick={async () => {
          await saveLocation()
          navigate("/mechanic/dashboard")
        }}
      >
        Save Shop Location
      </Button>
    </Flex>
  )
}

export default Onboarding3
