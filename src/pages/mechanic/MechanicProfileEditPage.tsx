import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View
} from "@aws-amplify/ui-react"
import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthContext"
import { useImagePicker } from "../../hooks/useImagePicker"
import LocationPickerMap from "../../components/LocationPickerMap"
import { usePickLocation } from "../../hooks/usePickLocation"
import { toast } from "react-hot-toast"
import { Auth, DataStore } from "aws-amplify"
import { User } from "../../models"
import LayoutItem from "../../components/LayoutItem"
import { useNavigate } from "react-router-dom"

const MechanicProfileEditPage = () => {
  const { user, authUser, setName: setUserName } = useAuth()
  const { image, imageFile, pickImage, uploadImage } = useImagePicker(
    user?.picture as string
  )
  const {
    pickedLocation,
    setPickedLocation,
    pickCurrentLocation,
    saveLocation
  } = usePickLocation({
    latitude: parseFloat(user?.latitude!),
    longitude: parseFloat(user?.longitude!)
  })
  const [name, setName] = useState(user?.name as string)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const saveName = async () => {
    try {
      const originalUser = await DataStore.query(User, (u) =>
        u.userId.eq(user!.id)
      )
      await DataStore.save(
        User.copyOf(originalUser[0], (updated) => {
          updated.name = name
        })
      )
      await Auth.updateUserAttributes(authUser, {
        name: name
      })
      setUserName(name)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const saveProfileHandler = async () => {
    setLoading(true)
    try {
      if (imageFile) await uploadImage()

      await saveLocation()
      await saveName()

      toast.success("Profile updated successfully!")
      navigate("/mechanic/profile")
    } catch (err) {
      const error = err as Error
      toast.error(error.message)
    }
    setLoading(false)
  }

  return (
    <LayoutItem>
      <Flex direction="column" alignItems="flex-start" gap="20px">
        <Image
          src={image}
          alt={user?.name}
          width="150px"
          height="150px"
          objectFit="contain"
          backgroundColor="#dedede"
          borderRadius="50%"
        />
        <input
          type="file"
          id="image"
          hidden
          onChange={pickImage}
          accept="image/*"
        />
        <Button as="label" htmlFor="image">
          Upload Image
        </Button>
      </Flex>

      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        marginTop="50px"
      />

      <Flex
        marginTop="50px"
        direction="column"
        gap="20px"
        alignItems="flex-start"
      >
        <Button onClick={pickCurrentLocation}>Pick current location</Button>

        <Text>Or</Text>

        <Heading level={4}>Pick from the map</Heading>

        <View width="100%" height="600px">
          <LocationPickerMap
            center={[
              pickedLocation?.latitude || 51.505,
              pickedLocation?.longitude || -0.09
            ]}
            pickedLocation={pickedLocation}
            setPickedLocation={setPickedLocation}
          />
        </View>
      </Flex>

      <Button
        size="large"
        variation="primary"
        marginTop="50px"
        onClick={saveProfileHandler}
        isLoading={loading}
        isDisabled={loading}
      >
        Save
      </Button>
    </LayoutItem>
  )
}

export default MechanicProfileEditPage
