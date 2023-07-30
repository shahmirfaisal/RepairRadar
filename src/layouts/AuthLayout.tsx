import { Flex, Grid, Heading } from "@aws-amplify/ui-react"
import { Outlet, useNavigate } from "react-router-dom"
import withNoAuth from "../hoc/withNoAuth"
import LayoutItem from "../components/LayoutItem"
import "@lottiefiles/lottie-player"
import NavBarHeader2 from "../ui-components/NavBarHeader2"

let AuthLayout: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <NavBarHeader2
        overrides={{
          NavBarHeader2: {
            width: "100%"
          },
          "Frame 5": {
            onClick: () => navigate("/"),
            style: {
              cursor: "pointer"
            }
          },
          Button39493466: {
            onClick: () => navigate("/auth/login")
          },
          Button39493467: {
            onClick: () => navigate("/auth/signup")
          }
        }}
      />

      <Grid
        templateColumns={{ base: "1fr", medium: "1fr 1fr" }}
        minHeight="100vh"
        padding="20px"
        gap="20px"
      >
        <LayoutItem>
          <Outlet />
        </LayoutItem>

        <LayoutItem
          component={Flex}
          justifyContent="center"
          alignItems="center"
          display={{ base: "none", medium: "flex" }}
        >
          <lottie-player
            src="https://lottie.host/779e75ab-5dfb-4575-8afc-c1eb2d9829c3/YjigYGE78u.json"
            background="#FFFFFF"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </LayoutItem>
      </Grid>
    </>
  )
}

AuthLayout = withNoAuth(AuthLayout)

export default AuthLayout
