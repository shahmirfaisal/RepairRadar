import { useCallback, useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import Onboarding1 from "../ui-components/Onboarding1"
import { Stepper } from "react-form-stepper"
import { View } from "@aws-amplify/ui-react"
import Onboarding2 from "../ui-components/Onboarding2"
import Onboarding3 from "../components/Onboarding3"
import { useImagePicker } from "../hooks/useImagePicker"
import withAuth from "../hoc/withAuth"
import { useNavigate } from "react-router-dom"

const steps = [
  { label: "Setup Profile" },
  { label: "Upload Picture" },
  { label: "Provide Location" }
]

let OnboardingPage: React.FC = () => {
  const { user } = useAuth()
  const [activeStep, setActiveStep] = useState(0)
  const { image, pickImage, uploadImage } = useImagePicker(
    "/blank-profile-picture.webp"
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.picture) {
      setActiveStep(2)
    }
    if (user?.picture && user?.latitude && user?.longitude) {
      navigate("/mechanic/dashboard")
    }
  }, [])

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
    <View padding="100px 0" backgroundColor="white" minHeight="100vh">
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

OnboardingPage = withAuth(OnboardingPage, "Mechanic")

export default OnboardingPage
