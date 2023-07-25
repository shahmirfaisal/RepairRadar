import { useCallback, useState } from "react"
import { useAuth } from "../context/AuthContext"
import Onboarding1 from "../ui-components/Onboarding1"
import { Stepper } from "react-form-stepper"
import { View } from "@aws-amplify/ui-react"
import Onboarding2 from "../ui-components/Onboarding2"
import Onboarding3 from "../components/Onboarding3"
import { useImagePicker } from "../hooks/useImagePicker"

const steps = [
  { label: "Setup Profile" },
  { label: "Upload Picture" },
  { label: "Provide Location" }
]

const OnboardingPage = () => {
  const { user } = useAuth()
  const [activeStep, setActiveStep] = useState(0)
  const { image, pickImage, uploadImage } = useImagePicker(
    "/blank-profile-picture.webp"
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
              onClick: async () => {
                await uploadImage()
                setActiveStep((prev) => prev + 1)
              }
            }
          }}
        />
      )

    if (activeStep === 2) return <Onboarding3 />
  }, [image, activeStep, user, uploadImage])

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
        onChange={pickImage}
        accept="image/*"
      />
    </View>
  )
}

export default OnboardingPage
