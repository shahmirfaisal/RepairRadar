import { useCallback, useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import Onboarding1 from "../ui-components/Onboarding1"
import { Stepper } from "react-form-stepper"
import { View } from "@aws-amplify/ui-react"
import Onboarding2 from "../ui-components/Onboarding2"
import { Auth, DataStore, Storage } from "aws-amplify"
import { toast } from "react-hot-toast"
import { User } from "../models"
import Onboarding3 from "../components/Onboarding3"

const steps = [
  { label: "Setup Profile" },
  { label: "Upload Picture" },
  { label: "Provide Location" }
]

const OnboardingPage = () => {
  const { user, authUser, setPicture, setLocation } = useAuth()
  const [activeStep, setActiveStep] = useState(2)
  const [image, setImage] = useState("/blank-profile-picture.webp")
  const [imageFile, setImageFile] = useState<File | null>(null)

  useEffect(() => {
    if (user!.picture) setImage(user!.picture)
  }, [user])

  const pickImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const file = e.target.files[0]
    const fileReader = new FileReader()

    fileReader.onload = () => {
      setImage(fileReader.result as string)
      setImageFile(file)
    }

    fileReader.readAsDataURL(file)
  }

  const uploadImageHandler = useCallback(async () => {
    try {
      await Storage.put(user!.id, imageFile!)
      const url = await Storage.get(user!.id)
      const originalUser = await DataStore.query(User, (u) =>
        u.userId.eq(user!.id)
      )
      await DataStore.save(
        User.copyOf(originalUser[0], (updated) => {
          updated.picture = url
        })
      )
      await Auth.updateUserAttributes(authUser, {
        picture: url
      })
      setPicture(url)
      setActiveStep((prev) => prev + 1)
    } catch (error) {
      toast.error(error.message)
    }
  }, [authUser, imageFile, user, setPicture])

  const saveLocationHandler = useCallback(
    async (location: LocationType | null) => {
      try {
        if (!location) throw new Error("Please pick a location")

        const originalUser = await DataStore.query(User, (u) =>
          u.userId.eq(user!.id)
        )
        await DataStore.save(
          User.copyOf(originalUser[0], (updated) => {
            updated.latitude = location.latitude.toString()
            updated.longitude = location.longitude.toString()
          })
        )
        await Auth.updateUserAttributes(authUser, {
          "custom:latitude": location.latitude.toString(),
          "custom:longitude": location.longitude.toString()
        })
        setLocation(location)
      } catch (error) {
        toast.error(error.message)
      }
    },
    [authUser, user, setLocation]
  )

  const renderStep = useCallback(() => {
    if (activeStep === 0)
      return (
        <Onboarding1
          overrides={{
            Heading: {
              children: `Welcome ${user!.name}!`
            },
            Button: {
              onClick: () => setActiveStep((prev) => prev + 1)
            }
          }}
        />
      )

    if (activeStep === 1)
      return (
        <Onboarding2
          image={image}
          overrides={{
            "Upload New Image": {
              as: "label",
              htmlFor: "imageInput",
              style: {
                cursor: "pointer"
              }
            },
            Button: {
              onClick: uploadImageHandler
            }
          }}
        />
      )

    if (activeStep === 2)
      return <Onboarding3 saveLocationHandler={saveLocationHandler} />
  }, [image, activeStep, user, uploadImageHandler, saveLocationHandler])

  return (
    <View marginTop="100px" marginBottom="100px">
      <Stepper
        steps={steps}
        activeStep={activeStep}
        className="stepper"
        stepClassName="step"
      />

      {renderStep()}

      <input
        type="file"
        id="imageInput"
        hidden
        onChange={pickImageHandler}
        accept="image/*"
      />
    </View>
  )
}

export default OnboardingPage
