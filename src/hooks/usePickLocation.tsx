import { Auth, DataStore, Storage } from "aws-amplify"
import { useState, useCallback } from "react"
import { User } from "../models"
import { useAuth } from "../context/AuthContext"
import { toast } from "react-hot-toast"

export const usePickLocation = (initialLocation: LocationType | null) => {
  const [pickedLocation, setPickedLocation] = useState<LocationType | null>(
    initialLocation
  )
  const { user, setLocation, authUser } = useAuth()

  const pickCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPickedLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => {
        toast.error(error.message)
      }
    )
  }

  const saveLocationHandler = useCallback(async () => {
    try {
      if (!pickedLocation) throw new Error("Please pick a location")

      const originalUser = await DataStore.query(User, (u) =>
        u.userId.eq(user!.id)
      )
      await DataStore.save(
        User.copyOf(originalUser[0], (updated) => {
          updated.latitude = pickedLocation.latitude.toString()
          updated.longitude = pickedLocation.longitude.toString()
        })
      )
      await Auth.updateUserAttributes(authUser, {
        "custom:latitude": pickedLocation.latitude.toString(),
        "custom:longitude": pickedLocation.longitude.toString()
      })
      setLocation(pickedLocation)
    } catch (error) {
      toast.error(error.message)
    }
  }, [authUser, user, pickedLocation, setLocation])

  return {
    pickedLocation,
    setPickedLocation,
    pickCurrentLocation,
    saveLocation: saveLocationHandler
  }
}
