import { Button, Grid, Heading, Text, View } from "@aws-amplify/ui-react"
import "@lottiefiles/lottie-player"
import { CiSearch } from "react-icons/ci"
import { IconType } from "react-icons"
import { AiOutlineEye, AiOutlineSchedule } from "react-icons/ai"
import { GrContact } from "react-icons/gr"
import { MdOutlineFeedback } from "react-icons/md"
import Layout from "../layouts/Layout"
import { Link } from "react-router-dom"

const Feature = ({
  title,
  description,
  Icon
}: {
  title: string
  description: string
  Icon: IconType
}) => {
  return (
    <View
      boxShadow="1px 1px 4px rgba(0,0,0,0.1)"
      padding="20px"
      backgroundColor="white"
    >
      <Icon size={40} />
      <Heading marginBottom="10px" level={4}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </View>
  )
}

const LandingPage = () => {
  return (
    <View backgroundColor="hsl(0deg 0% 96.37%)">
      <Layout>
        <Grid
          templateColumns={{ base: "1fr", medium: "600px 1fr" }}
          gap="20px"
          margin="50px auto"
          maxWidth="1300px"
          alignItems="center"
          justifyContent="space-between"
        >
          <View>
            <Heading fontWeight="bold" marginBottom="20px" level={2}>
              Discover Trusted Mechanics Near You
            </Heading>
            <Text>
              Discover the Future of Vehicle Repairs with RepairRadar! We
              connect vehicle owners with skilled mechanics, making vehicle
              maintenance hassle-free and efficient. Our user-friendly app
              allows you to find nearby mechanics, view their profiles, and read
              genuine customer reviews and book appointments.
            </Text>
            <Button
              variation="primary"
              size="large"
              marginTop="20px"
              as={Link}
              to="/auth/login"
            >
              Get Started
            </Button>
          </View>

          <View>
            <lottie-player
              src="https://lottie.host/779e75ab-5dfb-4575-8afc-c1eb2d9829c3/YjigYGE78u.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              loop
              autoplay
              direction="1"
              mode="normal"
            ></lottie-player>
          </View>
        </Grid>
        <View marginTop="100px">
          <Heading
            level={2}
            fontWeight="bold"
            textAlign="center"
            marginBottom="20px"
          >
            How It Works
          </Heading>

          <Grid
            templateColumns={{
              base: "1fr",
              small: "1fr 1fr",
              medium: "1fr 1fr 1fr"
            }}
            gap="20px"
            margin="50px auto"
            maxWidth="1300px"
            justifyContent="center"
          >
            <Feature
              title="Find a a nearby mechanic"
              description="Search for mechanics in your area through an interactive map."
              Icon={CiSearch}
            />

            <Feature
              title="View Profile"
              description="View mechanic profiles and read genuine customer reviews."
              Icon={AiOutlineEye}
            />

            <Feature
              title="Contact Mechanic"
              description="Contact the mechanic directly and discuss your needs."
              Icon={GrContact}
            />

            <Feature
              title="Book an Appointment"
              description="Book an appointment with your chosen mechanic. The mechanic will accept or reject your requested appointment."
              Icon={AiOutlineSchedule}
            />

            <Feature
              title="Provide Review"
              description="After your appointment, provide a review of your experience with a mechanic."
              Icon={MdOutlineFeedback}
            />
          </Grid>
        </View>
      </Layout>
    </View>
  )
}

export default LandingPage
